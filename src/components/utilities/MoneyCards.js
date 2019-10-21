import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    depositContext: {
        flex: 1
    }
});

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
            <Typography component="p" variant="h4">
                {props.value}
            </Typography>
            <Typography
                color="textSecondary"
                className={classes.depositContext}
            >
                {props.subValue}
            </Typography>
        </React.Fragment>
    );
};
