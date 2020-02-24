// React
import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Table from '../utilities/Table';
// Redux
import { connect } from 'react-redux';
// Libs
import { getStatus, capitalize } from '../../libs/formatting';

const Devices = props => {
    // Working out rooms table
    const tableHeaders = [
        'Room',
        'Device Name',
        'Status',
        'Led Count',
        'Led Type',
        'Location',
        'Local IP',
        'Mac Address',
        'Mode'
    ];
    let rows = [];
    for (let [key, value] of Object.entries(props.rooms)) {
        rows.push([
            value.config.roomname || 'Not Assigned',
            <Link to={(value.config.NEW ? `setup` : `edit`) + `/${key}`}>
                <strong>{key}</strong>
            </Link>,
            getStatus(value.status, value.config.NEW),
            value.config.NUM_LEDS,
            value.config.LED_TYPE,
            value.config.LOCATION,
            value.config.LOCAL_IP,
            value.config.MAC_ADDRESS,
            capitalize(value.data ? value.data.mode : '')
        ]);
    }
    return <Table headers={tableHeaders} data={rows} />;
};

const mapStateToProps = state => {
    return {
        rooms: state.rooms
    };
};

export default connect(mapStateToProps, {})(Devices);
