import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { enviroment } from "./enviroments/enviroments";
import { Button } from "@mui/material";

import Server from "./Server"

export default function ServerList(){

    const navigate = useNavigate()
    const handler = () => {
        navigate("/form")
    }
    const [servers, setServers] = useState([]);

    function onDelete(id){
        let i = servers.findIndex((server) => server.id === id);
        servers.splice(i,1);
        console.log(servers);
        setServers(servers);
    }

    useEffect(() => {
        fetch(enviroment.baseUrl + "/list")
        .then(response => response.json())
        .then(response => setServers(response))
    }, []);

    return (
      
      <div>
          <Button color="inherit" onClick={handler}>+ ADD Server</Button>
          {servers.map((server) => (
            <Server key={server.id} server={server} onDelete={(id) => {
                let i = servers.findIndex((server) => server.id === id);
                servers.splice(i,1);
                setServers([...servers]);
            }}/>
          ))}
        </div>
      );
}