import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { compose } from 'redux'
import MPinput from '../patientComponent/inputComponent/MPinput'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});



class MedicalPrescription extends React.Component {

  state = {

  }

  handleClose = (value) => {
    console.log('data', value.name)

  }

  result = [{ name: 'AXI', DaysInterval: '30', time: '3' },
  { name: 'AUB', DaysInterval: '10', time: '1' }]




  render() {

    const { classes } = this.props;
    console.log(this.props.patient.MedicalPrescription)

    return (
      <div>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}}>Medicine Name</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} >Days Interval</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} >Times/day</CustomTableCell>
                        
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.patient.MedicalPrescription.map((row,key)=> {
                        return (
                            <TableRow className={classes.row} key={key}>
                                <CustomTableCell style={{  textAlign:"center"}} component="th" scope="row">{row.name}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{row.daysInterval}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{row.times}</CustomTableCell>
                                
                                
                               
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>     
        </Paper>
        {(this.props.patient.CaseId !=0) && <MPinput />}
      </div>
    )
  }
}

MedicalPrescription.propTypes = {
  classes: PropTypes.object.isRequired,
};


//Note:add the redux state to the props
const mapStateToProps = (state) => {
    return {
      patient: state.patient
    }
  }

export default compose(withStyles(styles),connect(mapStateToProps))(MedicalPrescription);