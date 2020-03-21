import React, { useEffect } from 'react';
import { getStatus } from '../../libs/formatting';
import { connect } from 'react-redux';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Presets
import fill_preset from '../../data_presets/fill';
// Text
import Text from '../utilities/Text';
// Actions
import { UpdateRoomData } from '../../actions';
// Components
import LedStrip from '../utilities/LedStrip';
// Styles
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

const Control = props => {
    const classes = useStyles();

    const { device_name } = props.match.params;
    const room = props.rooms[device_name];

    if (!room) return <></>;

    // Functions
    const setPreset = preset => {
        const data = fill_preset(room.config.NUM_LEDS, preset);
        props.UpdateRoomData(device_name, data);
    };

    return (
        <Grid container spacing={3}>
            <ToastContainer autoClose={3000} />
            {/* Setup device */}
            <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                    <Text h>
                        Controlling "{device_name}"&nbsp;
                        <span style={{ fontSize: '16px' }}>
                            {getStatus(room.status, room.config.NEW)}
                        </span>
                    </Text>
                    {/* LEDs Preview */}
                    <br />
                    <span style={{ fontSize: '18px', fontWeight: '550' }}>
                        LED strip preview
                    </span>
                    <LedStrip data={room.data} />
                    {/* Presets */}
                    <br />
                    <span style={{ fontSize: '18px', fontWeight: '550' }}>
                        Choose from presets
                    </span>
                    <br />
                    <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                    >
                        <Button onClick={() => setPreset('rgbw_w')}>
                            White RGBW
                        </Button>
                        <Button onClick={() => setPreset('rgb_w')}>
                            White RGB
                        </Button>
                        <Button onClick={() => setPreset('red')}>Red</Button>
                        <Button onClick={() => setPreset('green')}>
                            Green
                        </Button>
                        <Button onClick={() => setPreset('blue')}>Blue</Button>
                        <Button onClick={() => setPreset('orange')}>
                            Orange
                        </Button>
                        <Button onClick={() => setPreset('purple')}>
                            Purple
                        </Button>
                        <Button onClick={() => setPreset('uv')}>
                            Ultra Violet
                        </Button>
                        <Button onClick={() => setPreset('aqua')}>Aqua</Button>
                        <Button onClick={() => setPreset('pink')}>Pink</Button>
                    </ButtonGroup>
                </Paper>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = state => {
    const { rooms } = state;
    return {
        rooms
    };
};

export default connect(mapStateToProps, { UpdateRoomData })(Control);
