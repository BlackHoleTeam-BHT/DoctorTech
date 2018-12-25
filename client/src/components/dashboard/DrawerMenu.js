import React from 'react';
import {
  MenuList,
  MenuItem,
  Typography,
  Divider,

} from '@material-ui/core';
import { NavLink } from 'react-router-dom'

//  import MailIcon from '@material-ui/icons/Mail';
//  import MenuIcon from '@material-ui/icons/Menu';

const DrawerMenu = ({ classes }) => {
  return (
    <div>
      <div className={classes.toolbar}>
      
      </div>
      <Divider />
      <MenuList>
        <MenuItem 
          className={classes.menuItem} component={NavLink} exact 
          to="/dashboard" 
          activeStyle={{ background: "grey", color: "white" }}>
          Home
        </MenuItem>
        <MenuItem 
            className={classes.menuItem} component={NavLink} 
            to="/dashboard/add-patient" 
            activeStyle={{ background: "grey", color: "white" }}>
          Add Patient
        </MenuItem>
        <MenuItem className={classes.menuItem}
           component={NavLink} 
           to="/dashboard/patients" 
           activeStyle={{ background: "grey", color: "white" }}>
          Patient
        </MenuItem>
        <MenuItem className={classes.menuItem}
           component={NavLink}
            to="/dashxbard"
             activeStyle={{ background: "grey", color: "white" }}>
          Conslations
        </MenuItem>
        <MenuItem className={classes.menuItem} 
          component={NavLink} 
          to="/daschbard" 
          activeStyle={{ background: "grey", color: "white" }}>
          Smart prediction
        </MenuItem>
        <Divider />

      </MenuList>
    </div>
  )
}

export default DrawerMenu;
