import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { enviroment } from "./enviroments/enviroments";

export default function Server({ server, onDelete }) {

    function deleteServer(){
        fetch(enviroment.baseUrl + "/delete/" + server.id, 
        {
            method: 'DELETE',
        })
        .then(()=> onDelete(server.id))
    }

  return (
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
        <p>CPU Usage: {server.CPUUsage * 100 + "%"}</p>
        <p>Memory Usage: {server.memoryUsage * 100 + "%"}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button variant="outlined" color="primary">
          Update
        </Button>
        <Button variant="outlined" color="error" onClick={deleteServer}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
