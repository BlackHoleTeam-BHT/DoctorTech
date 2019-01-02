import React from 'react';
import {
  Paper,
  InputBase,
  IconButton,
  Typography,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux'
import { connect } from 'react-redux';
import {searchAboutPatient} from '../../store/action/patientAction.js'

const styles = {
  root: {
    padding: '2px 8px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
};

class DoctorSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
       target : ''
    }
  }
  
  // function to get the data and search directly depend on the target that user insert it
  handleOnChange (e) {
    this.setState({
      target: e.target.value
    })
    // call the function from patienAction to search 
  } 

 // functon to search about the target doctor when click on search button
  handlOnClicle() {
   

  }
  render() {
    const classes = this.props.classes;
    return (
      <div className="text-center">
        <div style={{margin: "20px"}} >
          <Typography variant="h6">
            search about doctors for consultation
          </Typography>
          <div style={{display:"flex", justifyContent:"center" , marginTop:"40px"}}>
            <Paper className={classes.root} elevation={1}>
              <InputBase className={classes.input} 
                type="text"
                placeholder="search by speticialist, name or phone ... " 
                name = "target"
                value= {this.state.target}
                onChange = {this.handleOnChange.bind(this)}
              />
              <IconButton className={classes.iconButton} 
                aria-label="Search"
                onClick={this.handlOnClicle.bind(this)}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </div>
      </div>

    )
  }
}

DoctorSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patients: state.patient.patients,
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    searchAboutPatient: (target) => dispatch(searchAboutPatient(target))
  }
}

export default compose(withStyles(styles), connect(mapStateToProps,mapDispatchToProps))(DoctorSearch);