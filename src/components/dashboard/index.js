import React from 'react';
// Material UI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// Components
import Chart from '../utilities/Chart';

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

export default props => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={7} lg={8}>
                <Paper className={fixedHeightPaper}>
                    <Chart
                        title="Today's energy consumption"
                        y="Cost £"
                        x="Last 24 Hours"
                    />
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={5} lg={4}>
                <Paper className={fixedHeightPaper}>Test</Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={classes.paper}>TEST</Paper>
            </Grid>
        </Grid>
    );
};
