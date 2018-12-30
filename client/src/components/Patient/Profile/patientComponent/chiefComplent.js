import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import logo from '../../../../image/chief2.jpg'
import {connect} from 'react-redux'
import { compose } from 'redux'
import MCInput from './inputComponent/MCInput'

//Note:page style
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  img: {
    borderRadius: 0,
    width: 100,
    height: 100

  },
  hr: {
    height: 4,
    marginLeft: 15,
    marginBottom: -3,
    backgroundImage: '-webkit-linear-gradient(left, rgba(15,157,88,.8), rgba(15, 157, 88,.6), rgba(0,0,0,0))'
  }
});


class ChiefComplaint extends React.Component {

    state = {

    }


    render() {
        const { classes } = this.props;
        console.log('CF',this.props.patient.chiefComplaint)
        return (
            <div>
            <List className={classes.root}>
                {this.props.patient.chiefComplaint.map((value, key) => {
                    return (
                         <div>
                             
                        <ListItem alignItems="flex-start" key={key} >
                            <ListItemAvatar >
                                <Avatar alt="Remy Sharp" src={logo} title={value.date} className={classes.img} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={value.title}
                                secondary={
                                    
                                    <React.Fragment>
                                        <br/>
                                        <Typography component="span" className={classes.inline} color="textPrimary">
                                           Complaint - &nbsp;
                                          </Typography>
                                        {value.description}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                         <hr  className={classes.hr}/>
                        </div>   
                        


                    )

                })}

            </List>
            
            {(this.props.patient.CaseId !=0) && <MCInput />}
        </div>
        );
       
    }


}

ChiefComplaint.propTypes = {
  classes: PropTypes.object.isRequired,
};

//Note:add the redux state to the props
const mapStateToProps = (state) => {
    return {
      patient: state.patient
    }
  }
  




export default compose(withStyles(styles),connect(mapStateToProps))(ChiefComplaint);
