import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

function medicalAnalysis(props) {
    


    var result=[{eventName:'ozil',cost:25,availableSeats:5,date:'01/01/2018',approve:1}]
    

    const { classes } = props;

    return (
            <div>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}}>Event Name</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} numeric>Event Cost</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} numeric>Number of seats</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} >Event Date</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} numeric>Manager Approval</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {result.map(row => {
                        return (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell style={{  textAlign:"center"}} component="th" scope="row">
                                    {row.eventName}
                                </CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{row.cost}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} numeric>{row.availableSeats}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} numeric>{row.date}</CustomTableCell>
                                {/* <CustomTableCell numeric style={{  textAlign:"center",color: (row.approve==1) ? 'green':'red' }}>{(row.approve==1)?'approved':'Not Approve'}</CustomTableCell> */}
                                <CustomTableCell numeric style={{  textAlign:"center",color: (row.approve==1) ? 'green':(row.approve==0) ? 'blue':'red' }}>{(row.approve==1)?'approved':(row.approve==0) ? 'Pending':'rejected'}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>     
        </Paper>
        <p style={{textAlign:"center",fontSize:'10px',color:'red',paddingTop:'20px'}}>Press ESC to Exit</p>
        </div>
    );
}

medicalAnalysis.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(medicalAnalysis);