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
    complaint: [{
      id: 1,
      title: 'Brunch this weekend?',
      description: " — I'll be in your neighborhood doing errands this…",
      date: '21/12/2018'
    }, {
      id: 2,
      title: 'Main chief',
      description: " — I'll be in your neighborhood doing errands this…",
      date: '15/12/2018'
    }]
  }

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        {this.state.complaint.map((value, key) => {
          return (
            <div key = {key}>
              <ListItem alignItems="flex-start" key={key} >
                <ListItemAvatar >
                  <Avatar alt="Remy Sharp" src={logo} title={value.date} className={classes.img} />
                </ListItemAvatar>
                <ListItemText
                  primary={value.title}
                  secondary={

                    <React.Fragment>
                      <br />
                      <Typography component="span" className={classes.inline} color="textPrimary">
                        Complaint
                      </Typography>
                      {value.description}
                    </React.Fragment>
                  }
                />
              </ListItem>
              {key % 2 === 0 && <hr className={classes.hr} />}
            </div>
          )

        })}

      </List>
    );
  }


}

ChiefComplaint.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(ChiefComplaint);
