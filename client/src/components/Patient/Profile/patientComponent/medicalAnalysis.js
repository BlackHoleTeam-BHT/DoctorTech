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

    state={

    }
    
handleClose=(value)=>{
    console.log('data',value.name)

}

     result=[{name:'blood test',description:' blood test analysis ',date:'01/01/2018',Status:'0'},
     {name:'blood test',description:' blood test analysis ',date:'01/01/2018',Status:'1'}]
    

  

 render() {

    const { classes } = this.props;

    return (
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
                    {this.result.map((row,key)=> {
                        return (
                            <TableRow className={classes.row} key={key}>
                                <CustomTableCell style={{  textAlign:"center"}} component="th" scope="row">
                                    {row.name}
                                </CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{row.description}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{row.date}</CustomTableCell>
                                <CustomTableCell numeric style={{  textAlign:"center",color: (row.Status==1) ? 'green':'red'}}>{(row.Status==1)?'Done': 'Pending'}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{(row.Status==0) ? <IconButton id={row.Status} onClick={()=>this.handleClose(row)} style={{  color:"black"}}><Icon>lock</Icon></IconButton> : <IconButton onClick={()=>this.handleClose(row)} style={{  color:"black"}}><Icon>lock_open</Icon></IconButton>}</CustomTableCell>
                               
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>     
        </Paper>
       
        </div>
    )}
}

medicalAnalysis.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(medicalAnalysis);