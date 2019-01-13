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
  console.log('Menue',props.API.Weather.weather)
  return (
    <div>
     {props.API.Weather.weather && <div className={classes.toolbar} ><img style={{width:'25%',marginLeft:'15%'}}    src={'http://openweathermap.org/img/w/'+ props.API.Weather.weather[0].icon + '.png'} alt=""/>{Math.round((props.API.Weather.main.temp-273.15))+'°C '}{props.API.Weather.weather[0].description.toUpperCase()}</div>}
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
            to={"/dashboard/"+ props.user.id + "/consultaion"}
        >
          Consultations
        </MenuItem>
        <MenuItem className={classes.menuItem} 
          component={NavLink} 
          to={"/dashboard/"+ props.user.id + "/samrt-prediction"}
        >
          Smart prediction
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component={NavLink}
          to={"/dashboard/"+  props.user.id + "/dr-profile"}
        >
          Dr Profile
        </MenuItem>

        <Divider />
      </MenuList>
    </div>
  );
};

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    user : state.auth.user,
    API:state.API
  }
}

export default connect(mapStateToProps)(DrawerMenu);
