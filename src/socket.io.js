// Redux store
import store from './reduxStore';
// Socket.io
import io from 'socket.io-client';
// Actions
import { ReceiveRooms, UpdateOnlineStatus } from './actions';
const config = require('./config');

// Creating socket
const socket = io(config.socker_url);

// On connection success
socket.on('handshake', function(data) {
    console.warn('[SOCKET] Connection established... Fetching all rooms.');
    socket.emit('get_rooms');
});
// Receiving rooms
socket.on('rooms', function(data) {
    store.dispatch(ReceiveRooms(data));
    console.warn('[SOCKET] All rooms have been fetched.');
});
// Receive room
socket.on('room', function(data) {
    store.dispatch(ReceiveRooms(data));
    console.warn('[SOCKET] A room has been received.');
});

// Keep alive (Checking if device is online)
let lastconnected = {};
socket.on('rooms_keepalive', data => (lastconnected = data));
let ledStatus = {};
let statusChange = false;

// Connections lost
socket.on('disconnect', function() {
    alert('Connection to the server lost...');
});

let diff = 5000;
setInterval(() => {
    // Parse status data
    for (let key in lastconnected) {
        let TS = parseInt(lastconnected[key]);
        let latency = new Date() - TS * 1000;
        let newStatus = 'offline';
        if (latency < diff) newStatus = 'online';
        if (100 > TS) newStatus = 'reboot';
        // Checking status
        if (newStatus !== ledStatus[key]) {
            ledStatus[key] = newStatus;
            statusChange = true;
        }
    }
    // Update redux
    if (statusChange) {
        // Change status for next cycle
        statusChange = false;
        // Parse data: "online" => { status: "online" }
        let parsedLedStatus = {};
        Object.keys(ledStatus).map(
            key => (parsedLedStatus[key] = { status: ledStatus[key] })
        );
        // Dispatch
        store.dispatch(UpdateOnlineStatus(parsedLedStatus));
    }
}, 100);

export default socket;
