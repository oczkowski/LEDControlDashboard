import React, { useState, useEffect } from 'react';
import { getStatus } from '../../libs/formatting';
import { connect } from 'react-redux';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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
import { ChromePicker } from 'react-color';

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

    // Ace editor
    const [aceValue, updateAceValue] = useState('');
    useEffect(() => {
        if (room) updateAceValue(JSON.stringify(room.data, null, 6));
    }, [room]);

    // Color picker
    const [colorPicker, setColorPicker] = useState({
        color: { r: '255', g: '0', b: '0', a: '1' }
    });
    const handleColorPicker = color => {
        setColorPicker({ color: color.rgb });
        window.colorPicker = colorPicker; // REMOVE
    };

    if (!room) return <></>;

    // Functions
    const setPreset = preset => {
        const data = fill_preset(room.config.NUM_LEDS, preset);
        props.UpdateRoomData(device_name, data);
    };

    const paintStrip = e => {
        let index = e.target.getAttribute('index');
        if (index !== null && room) {
            var data = { ...room.data };

            var { r, g, b } = colorPicker.color;
            data.data[index] = { r, g, b };

            props.UpdateRoomData(device_name, data);
        }
    };

    const onAceChange = newValue => {
        updateAceValue(newValue.target.value);
    };

    const applyCustomConfig = () => {
        if (aceValue === null) {
            toast.error('Nothing changed. Not saving...');
            return;
        }
        try {
            JSON.parse(aceValue);
        } catch (e) {
            toast.error('Could not parse JSON:  ' + e);
        }
        props.UpdateRoomData(device_name, JSON.parse(aceValue));
        toast.success('Successfuly updated JSON config.');
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
                    <LedStrip data={room.data} onMouseOver={paintStrip} />
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
                    {/* Brush tool */}
                    <br />
                    <span style={{ fontSize: '18px', fontWeight: '550' }}>
                        Brush tool
                    </span>
                    <br />
                    <ChromePicker
                        disableAlpha
                        color={colorPicker.color}
                        onChange={handleColorPicker}
                    />
                    {/* Manual edit */}
                    <br />
                    <span style={{ fontSize: '18px', fontWeight: '550' }}>
                        Manual JSON Edit
                    </span>
                    <br />
                    <TextareaAutosize
                        style={{
                            maxWidth: '100%',
                            minWidth: '99%',
                            minHeight: '700px',
                            fontFamily: 'monospace',
                            fontSize: '16px'
                        }}
                        aria-label="Data Config JSON"
                        placeholder="Data Config JSON"
                        onChange={onAceChange}
                        value={aceValue}
                    />
                    <br />
                    <div style={{ width: '100%', textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{
                                width: '150px'
                            }}
                            onClick={applyCustomConfig}
                        >
                            Apply Config
                        </Button>
                    </div>
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
