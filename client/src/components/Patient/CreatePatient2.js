import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  textField: {
    width:300

  },
  textField2: {
    width:700
 

  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  }
});



class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div>
        
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid container  md={12}>
              <Grid md={1}></Grid>
              <Grid md={3}>
                <TextField
                  id="standard-password-input"
                  label="First-Name"
                  type="text"
                  margin="normal"
                  className={classes.textField}

                />
              </Grid>
              <Grid md={3}>
                <TextField
                  id="standard-password-input"
                  label="Middle-Name"
                  type="password"
                  margin="normal"
                  className={classes.textField}


                />
              </Grid>
              <Grid md={3}>
                <TextField
                  id="standard-password-input"
                  label="Last-Name"
                  type="password"
                  margin="normal"
                  className={classes.textField}


                />
              </Grid>
            </Grid>


            <Grid container  md={12}>
              <Grid md={1}></Grid>
              <Grid md={3}>
                <TextField
                  id="standard-password-input"
                  label="Age"
                  className={classes.textField}
                  type="number"
                  margin="normal"
                />
              </Grid>
              <Grid md={3}>
                <TextField
                  id="standard-password-input"
                  label="Phone"
                  className={classes.textField}

                  type="tel"
                  margin="normal"
                />
              </Grid>
              <Grid md={3}>
                <TextField
                  id="standard-password-input"
                  label="insurance-Number"
                  className={classes.textField}

                  type="number"
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Grid container md={12}>
              <Grid md={1}></Grid>
              <Grid xs={6}>
                <TextField
                  id="standard-password-input"
                  label="Email"
                  type="email"
                  margin="normal"
                  className={classes.textField2}

                />
              </Grid>
              </Grid>

              <Grid container md={12}>
              <Grid md={1}></Grid>
              <Grid xs={6}>
                <TextField
                  label="Location"
                  type="text"
                  margin="normal"
                  className={classes.textField2}

                />
              </Grid>
              </Grid>
                
              <Grid container md={12} style={{marginTop:'10px'}}>
              <Grid md={1}></Grid>
              <Grid md={1}>
              <p>Gender</p>
              </Grid>
              <Grid md={3}>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />              
          </RadioGroup>
          </Grid>
          <Grid md={3}>


          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Married"
        />



          </Grid>
          </Grid>
           



            <Grid item >
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
                <Select
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  value={this.state.age}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'demo-controlled-open-select',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>






            

          







        </div>
      </form>
      </div>


    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);