import React from 'react';
import {
  MenuList,
  MenuItem,
  Divider,

} from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
//  import MailIcon from '@material-ui/icons/Mail';
//  import MenuIcon from '@material-ui/icons/Menu';

const DrawerMenu = (props) => {
  const classes = props.classes;
  console.log(props)
  return (
    <div>
      <div className={classes.toolbar}>
      
      </div>
      <Divider />
      <MenuList>
        <MenuItem 
          className={classes.menuItem} component={NavLink} exact 
          to={"/dashboard/" + props.user.id} 
          activeStyle={{ background: "grey", color: "white" }}>
          Home
        </MenuItem>
        <MenuItem 
            className={classes.menuItem} component={NavLink} 
            to={"/dashboard/"+ props.user.id +"/add-patient" }
            activeStyle={{ background: "grey", color: "white" }}>
          Add Patient
        </MenuItem>
        <MenuItem className={classes.menuItem}
           component={NavLink} 
           to={"/dashboard/"+ props.user.id +"/patients" }
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

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    user : state.auth.user
  }
}

export default connect(mapStateToProps)(DrawerMenu);
