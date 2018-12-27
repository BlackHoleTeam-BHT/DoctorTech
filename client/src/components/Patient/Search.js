import React from 'react';
import {
  Paper,
  InputBase,
  IconButton,
  Typography,
  Grid
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

class Search extends React.Component {

  render() {
    const classes = this.props.classes;
    return (
      <div className="text-center">
        <Paper style={{margin: "20px", padding:"50px"}} >
          <Typography variant="display1">
            Search about patients
          </Typography>
          <div style={{display:"flex", justifyContent:"center" , marginTop:"40px"}}>
            <Paper className={classes.root} elevation={1}>
              <InputBase className={classes.input} placeholder="search by id, name, phone ... " />
              <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>

        </Paper>
      </div>

    )
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Search);