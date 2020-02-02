import React from 'react';
import { Link } from 'react-router-dom';
import { getStatus } from '../../libs/formatting';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
// Redux
import { connect } from 'react-redux';

import Text from '../utilities/Text';

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

// Validation

const Setup = props => {
    const classes = useStyles();
    const { device_name } = props.match.params;
    const room = props.rooms[device_name];

    if (!room) return <></>;

    return (
        <Grid container spacing={3}>
            {/* Setup device */}
            <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                    <FormControl variant="filled">
                        <Text h>
                            Setting up "{device_name}"&nbsp;
                            <span style={{ fontSize: '16px' }}>
                                {getStatus(room.status, room.config.NEW)}
                            </span>
                        </Text>
                        <p />
                        <TextField label="Room Name" variant="filled" />
                        <br />
                        <TextField label="Location" variant="filled" />
                        <br />
                        <TextField label="LED Type" variant="filled" />
                        <br />
                        <TextField
                            variant="filled"
                            label="LED Count"
                            type="number"
                        />
                        <br />
                        <Text>Choose a preset</Text>
                        <Select
                            value={room.data ? room.data.mode : 'fill'}
                            // onChange={e => setPreset(e.target.value)}
                        >
                            <MenuItem value="fill">Fill</MenuItem>
                            <MenuItem value="fade">Fade</MenuItem>
                        </Select>
                    </FormControl>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <Link to="/devices">
                            <Button variant="contained">Save setup</Button>
                        </Link>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

const mapSateToProps = state => {
    const { rooms } = state;
    return {
        rooms
    };
};

export default connect(mapSateToProps, {})(Setup);
