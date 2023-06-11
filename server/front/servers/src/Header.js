import * as React from "react";
import ServerForm from "./ServerForm";
  
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
  
export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar>  
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Servers
          </Typography>
          <Button color="inherit" onClick={ServerForm}>+ Adicionar Server</Button>
        </Toolbar>
      </AppBar>
  );
}