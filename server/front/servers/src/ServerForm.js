import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { enviroment } from "./enviroments/enviroments";
import "./ServerForm.css";


export default function ServerForm(props){

    const params = useParams();

    useEffect(() => {
        if (!params["id"]) {
            return
        }

        fetch(enviroment.baseUrl + "/getById/" + params["id"])
        .then(response => response.json())
        .then(response => {setServer(response[0]); console.log(response)})
    }, [params]);


    let method = ''
    let url = ''

    switch(props.operation) {
        case 'create': {
            method = 'POST';
            url = enviroment.baseUrl + "/create"
            break;
        }
        case 'update':{
            method = 'PUT';
            url = enviroment.baseUrl + "/update/" + params["id"]
            break;
        }
        default:{
            throw new Error (`Invalid operation: ${props.operation}.`)
        }
    }

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(url, {
            method: method,
            body: JSON.stringify(server)
        })
        .then(navigate("/"))
        .catch(e => {
            console.log(e)
            alert(`Failed to ${props.operation}`)
        })
    }

    const [server, setServer] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setServer({...server, [name]: value})
    }

    const handleCheck = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        setServer({...server, [name]: value})
    }

    return (
        <div id='form'>
            <form>
                <label>Name
                    <input type="text" name="serverName" value={server.serverName || ""} onChange={handleChange}/>
                </label>
                <label>Running
                    <input type="checkbox" name="isRunning" checked={!!server.isRunning} onChange={handleCheck}/>
                </label>
                <br></br>
                <br></br>
                <label>Monitored
                    <input type="checkbox" name="isMonitored" checked={!!server.isMonitored} onChange={handleCheck}/>
                </label>
                <br></br>
                <br></br>
                <label>Web Process Running
                    <input type="checkbox" name="isWebProcessRunning" checked={!!server.isWebProcessRunning} onChange={handleCheck}/>
                </label>
                <br></br>
                <br></br>
                <label>CPU Usage (%)
                    <input type="number" min="0" name="CPUUsage" value={server.CPUUsage || 0} onChange={handleChange}/>
                </label>
                <label>Memory Usage (%)
                    <input type="number" min="0" name="diskUsage" value={server.diskUsage || 0} onChange={handleChange}/>
                </label>
                <label>Total Memory (GB)
                    <input type="number" min="0" name="memoryUsage" value={server.memoryUsage || 0} onChange={handleChange}/>
                </label>
                <label>Total Disk Space (GB)
                    <input type="number" min="0" name="diskSpace" value={server.diskSpace || 0} onChange={handleChange}/>
                </label>
                <label>Running Time (ms)
                    <input type="number" min="0" name="runningTime" value={server.runningTime || 0} onChange={handleChange}/>
                </label>
                <label>CPU Capacity (GB)
                    <input type="number" min="0" name="CPUCapacity" value={server.CPUCapacity || 0} onChange={handleChange}/>
                </label>
                <div>
                    <input type="button" onClick={()=>{navigate('/')}} value="Cancel"></input>
                    <input type="submit" onClick={handleSubmit} value="Save"></input>
                </div>
            </form>
        </div>
      );
}