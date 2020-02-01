import React from 'react';
// Material UI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// Components
import MoneyCard from '../utilities/MoneyCards';
import Devices from './devices';
// React Router
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    },
    fixedHeight: {
        height: 250
    }
}));

const Dashboard = props => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            {/* Devices */}
            <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                    <Devices />
                    <div style={{ marginTop: '20px' }}>
                        <Link to="/devices">
                            <Button variant="contained">Manage devices</Button>
                        </Link>
                    </div>
                </Paper>
            </Grid>
            {/* Estimated bill */}
            {/* <Grid item xs={12} md={4} lg={4}>
                <Paper className={fixedHeightPaper}>
                    <MoneyCard
                        title="Average Daily spend"
                        value="£0.12"
                        subValue="Based on last 3 months (NOT WORKING YET)"
                    />
                </Paper>
            </Grid> */}
        </Grid>
    );
};

export default Dashboard;
