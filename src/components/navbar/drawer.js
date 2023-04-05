import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {IconButton} from"@material-ui/core";
import Menu from "@material-ui/icons/Menu"



function DrawerComponent() {
 const [openDrawer, setOpenDrawer] = useState(false); 
 return (
<>
      <Drawer 
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Elizaveta Anufrieva</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/portfolio">Portfolio</Link>
            </ListItemText> 
            <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          </ListItem>
        </List>
      </Drawer>
       <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <Menu />
      </IconButton>
         </> 
 );
}
export default DrawerComponent;