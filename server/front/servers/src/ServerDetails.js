import React, {useEffect, useState} from "react";

import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { useParams, useNavigate } from "react-router-dom";
import { enviroment } from "./enviroments/enviroments";

export default function ServerDetails(){

    const navigate = useNavigate()

    // retorna pares de chaves e valores das partes da url que são dinâmicas.
    const params = useParams();

    useEffect(() => {
        fetch(enviroment.baseUrl + "/getById/" + params["id"])
        .then(response => response.json())
        .then(response => {setServer(response[0]); console.log(response)})
    }, [params]);

    const [server, setServer] = useState({});

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <h3>Server {server.id}</h3>
                <p>Name: {server.serverName}</p>
                <p>{server.isRunning ? "Running" : "Stopped"}</p>
                <p>{server.isMonitored ? "Monitored" : "Not Monitored"}</p>
                <p>
                    {server.isWebProcessRunning
                    ? "Web Process Running"
                    : "Web Process Stopped"}
                </p>
                <p>CPU Usage: {server.CPUUsage + "%"}</p>
                <p>Memory Usage: {server.memoryUsage + "%"}</p>
                <p>Memory: {server.memory + "%"}</p>
                <p>Disk Space: {server.diskSpace + "GB"}</p>
                <p>disk Usage: {server.diskUsage + "GB"}</p>
                <p>Running Time: {server.runningTime + "ms"}</p>
                <p>CPU Capacity: {server.CPUCapacity + "GB"}</p>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{navigate('/')}}>Close</Button>
            </CardActions>
        </Card>
    )
}