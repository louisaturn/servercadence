import React, {useState, useEffect} from "react";
import Server from "./Server"
import { enviroment } from "./enviroments/enviroments";

export default function ServerList(){
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