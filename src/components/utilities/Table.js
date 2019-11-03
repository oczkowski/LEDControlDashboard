import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// React Router
import { Link } from 'react-router-dom';
// CSS
import './Table.css';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, 'Bed Room', 'Desk', 'Online (ON)', '300 RGBWW LED Strip'),
    createData(1, 'Bed Room', 'Bed', 'Online (OFF)', '100 RGBW LED Strip'),
    createData(2, 'Living Room', 'TV', 'Offline', '180 RGBWW LED Strip'),
    createData(
        3,
        'Living Room',
        'Coffe Table',
        'Online (OFF)',
        '80 RGBW LED Strip'
    ),
    createData(
        4,
        'Basement',
        'Main Light',
        'Online (OFF)',
        '300 Cold White Strip'
    )
];

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3)
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
            >
                {props.title}
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Room</TableCell>
                        <TableCell>Device Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Led Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link to="/devices">
                    <Button variant="contained">View all devices</Button>
                </Link>
            </div>
        </React.Fragment>
    );
};
