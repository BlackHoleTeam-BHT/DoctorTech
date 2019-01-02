import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { openShowConsultationDelials, openSendConsult } from '../../store/action/doctorActions';
import { Grid, Avatar } from '@material-ui/core';
import moment from 'moment';
const styles = {
  appBar: {
    position: 'relative',
    background: '#2caee2'
  },
  flex: {
    flex: 1,
  },
  center: {
    display: "flex",
    justifyContent: 'center'
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ShowConsultationDetials extends React.Component {

  // function to close Dialog
  handleClose = () => {
    this.props.openShowConsultationDelials(false, this.props.targetConsult)

  };

// function to replay on doctor close ShowConsDetails comp and open sendConsults model
  handleReply () {
    this.handleClose()
    this.props.openSendConsult(true, this.props.targetConsult);
  }

  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.isOpen}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit"
                style={{ paddingRight: 40 }}
                onClick={this.handleClose}
                aria-label="Close">
                <CloseIcon />
              </IconButton>

              <Button variant="outlined"
                onClick={this.handleReply.bind(this)}
                color="inherit"
                style={{ paddingRight: 40, marginLeft: 12, height: 20, fontSize: 17 }}
              >
                Reply
              </Button>
            </Toolbar>
          </AppBar>
          <div>

            <Grid container style={{ paddingTop: 50 }} className={classes.center}>

              <Grid container md={9}  >
                <Grid item xs={12} sm={12} md={12} style={{ marginBottom: 15, marginLeft: 10 }}>
                  <Typography variant="h4" color="inherit" className={classes.flex}>
                    {"Subject: " + this.props.targetConsult.subject}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={9} className={classes.flex}>
                  <AccountCircle style={{ display: "inline", marginRight: 10, fontSize: 40, color: "#eeeeee" }} />
                  <Typography variant="h6" color="primary" style={{ display: "inline" }}>
                    {"Dr. " + this.props.targetConsult.firstName + ' ' + this.props.targetConsult.lastName}
                  </Typography>
                  <Typography style={{ display: "inline", fontSize: 14, color: "grey", marginLeft: 10 }}>
                    {"<  mhd.rawashdah@gmail.com  >"}
                  </Typography>
                  <Typography style={{ fontSize: 14, color: "grey", marginLeft: 50 }}>
                    {"Tel: " + this.props.targetConsult.phoneNumber}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} className={classes.center} >
                  <Typography variant="subtitle1" color="default">
                    {moment(this.props.targetConsult.createdAtConsult).fromNow()}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} style={{ marginTop: 10 }} >
                  <Divider />
                  <pre style={{
                    fontSize: 18, marginLeft: 50, marginRight: 50, marginTop: 20,
                    maxHeight: "600px",
                    whiteSpace: "pre-wrap",
                    display: "block",
                    fontFamily: "Serif",
                    overflow: "auto",
                    height: "100%"
                  }}>
                    {
                      this.props.targetConsult.description
                    }
                  </pre>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Dialog>
      </div>
    );
  }
}

ShowConsultationDetials.propTypes = {
  classes: PropTypes.object.isRequired,
};

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    isOpen: state.doctor.isShowConsultDetialsOpen,
    targetConsult: state.doctor.targetConsult
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    openSendConsult: (isOpen, targetDoctor) => dispatch(openSendConsult(isOpen, targetDoctor)),
    openShowConsultationDelials: (isOpen, targetConsult) => dispatch(openShowConsultationDelials(isOpen, targetConsult))
  }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(ShowConsultationDetials);