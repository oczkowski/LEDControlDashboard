import React, { useState, useEffect, useCallback } from 'react';
import { getStatus } from '../../libs/formatting';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// Redux
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';

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

const Setup = props => {
    // State management
    const [room_config, upadeRoomConfig] = useState({
        roomname: '',
        LED_TYPE: 'SK6812',
        LOCATION: 'DESK',
        NUM_LEDS: 72,
        NEW: false
    });

    const updateConfig = useCallback(
        function updateConfig(propObj) {
            const { NUM_LEDS } = propObj;
            if (NUM_LEDS && !isFinite(NUM_LEDS)) return;
            upadeRoomConfig({ ...room_config, ...propObj });
        },
        [room_config]
    );

    const [preset, setPreset] = useState('fill');

    const [formDisabled, setDisabled] = useState(true);

    // Rendering
    const classes = useStyles();
    const { device_name } = props.match.params;
    const room = props.rooms[device_name];

    // Hooks
    useEffect(() => {
        if (room) {
            updateConfig(room.config);
            setDisabled(false);
        }
    }, [room, updateConfig]);

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
                        <TextField
                            disabled={formDisabled}
                            value={room_config.roomname}
                            onChange={e =>
                                updateConfig({ roomname: e.target.value })
                            }
                            label="Room Name"
                            variant="filled"
                        />
                        <br />
                        <TextField
                            disabled={formDisabled}
                            value={room_config.LOCATION}
                            onChange={e =>
                                updateConfig({ LOCATION: e.target.value })
                            }
                            label="Location"
                            variant="filled"
                        />
                        <br />
                        <TextField
                            disabled={formDisabled}
                            value={room_config.LED_TYPE}
                            onChange={e =>
                                updateConfig({ LED_TYPE: e.target.value })
                            }
                            label="LED Type"
                            variant="filled"
                        />
                        <br />
                        <TextField
                            disabled={formDisabled}
                            variant="filled"
                            label="LED Count"
                            type="number"
                            value={room_config.NUM_LEDS}
                            onChange={e =>
                                updateConfig({ NUM_LEDS: e.target.value })
                            }
                        />
                        <br />
                        <Text>Choose a preset</Text>
                        <Select
                            disabled={formDisabled}
                            value={preset}
                            onChange={e => setPreset(e.target.value)}
                        >
                            <MenuItem value="fill">Fill</MenuItem>
                            <MenuItem value="fade">Fade</MenuItem>
                        </Select>
                    </FormControl>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <Button disabled={formDisabled} variant="contained">
                            Save setup
                        </Button>
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
