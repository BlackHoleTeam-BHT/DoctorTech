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
          >
          Home
        </MenuItem>
        <MenuItem 
            className={classes.menuItem} component={NavLink} 
            to={"/dashboard/"+ props.user.id +"/add-patient" }
            >
          Add Patient
        </MenuItem>
        <MenuItem className={classes.menuItem}
           component={NavLink} 
           to={"/dashboard/"+ props.user.id +"/patients" }
          >
          Patient
        </MenuItem>
        <MenuItem className={classes.menuItem}
           component={NavLink}
            to="/dashxbard"
        >
          Conslations
        </MenuItem>
        <MenuItem className={classes.menuItem} 
          component={NavLink} 
          to="/daschbard" 
        >
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
