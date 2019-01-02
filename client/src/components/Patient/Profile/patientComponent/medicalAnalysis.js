import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {UpdateAnalysisStatus} from '../../../../store/action/patientAction'
import MAinput from './inputComponent/MAinput'

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



class medicalAnalysis extends React.Component {

  state = {

    }
    
handleClose=(value)=>{
   
    console.log('ID',value.id)

    if(value.status==1){
        
        this.props.UpdateAnalysisStatus(value.id,0)
    }else{
        this.props.UpdateAnalysisStatus(value.id,1)
    }
    
  }



  render() {

    const { classes } = this.props;
    console.log('analysis',this.props)

    return (
      <div>
      <div>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}}>Analysis Name</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} >Description</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} >Request Date</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} >Status</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} >Action</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.patient.medicalAnalysis.map((row,key)=> {
                        return (
                            <TableRow className={classes.row} key={key}>
                                <CustomTableCell style={{  textAlign:"center"}} component="th" scope="row">
                                    {row.name}
                                </CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{row.description}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{row.createdAt.slice(0,10)}</CustomTableCell>
                                <CustomTableCell  style={{  textAlign:"center",color: (row.status==1) ? 'green':'red'}}>{(row.status==1)?'Done': 'Pending'}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{(row.status==0) ? <IconButton id={row.status} onClick={()=>this.handleClose(row)} style={{  color:"black"}}><i style={{paddingRight:'20px'}} className="material-icons">lock</i></IconButton> : <IconButton onClick={()=>this.handleClose(row)} style={{color:"black"}}><i style={{paddingRight:'20px'}} className="material-icons">lock_open</i></IconButton>}</CustomTableCell>
                               
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>     
        </Paper>
      </div>
      <div>
        {(this.props.patient.CaseId !=0) && <MAinput />}
      </div>
      </div>
    )
  }
}

medicalAnalysis.propTypes = {
  classes: PropTypes.object.isRequired,
};

//Note:add the redux state to the props
const mapStateToProps = (state) => {
    return {
      patient: state.patient
    }
  }


  // Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
    return {
        UpdateAnalysisStatus: (id,status) => dispatch(UpdateAnalysisStatus(id,status))
    }
  }
  
  

export default compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(medicalAnalysis);

