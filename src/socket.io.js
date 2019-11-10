// Redux store
import store from './reduxStore';
// Socket.io
import io from 'socket.io-client';
// Actions
import { ReceiveRooms, UpdateOnlineStatus } from './actions';

// Creating socket
const socket = io('http://localhost');

// On connection success
socket.on('handshake', function(data) {
    console.warn('[SOCKET] Connection established... Fetching all rooms.');
    socket.emit('get_rooms', { my: 'data' });
});
// Receiving rooms
socket.on('rooms', function(data) {
    store.dispatch(ReceiveRooms(data));
    console.warn('[SOCKET] All rooms have been fetched.');
});
socket.on('room', function(data) {
    store.dispatch(ReceiveRooms(data));
    console.warn('[SOCKET] A room has been received.');
});

// Keep alive (Checking if device is online)
let lastconnected = {};
socket.on('rooms_keepalive', data => (lastconnected = data));
let ledStatus = {};
let statusChange = false;

let diff = 2000;
setInterval(() => {
    // Parse status data
    for (let key in lastconnected) {
        let latency = new Date() - lastconnected[key] * 1000;
        let newStatus = latency < diff && diff > 0 - diff ? 'online' : 'reboot';
        if (latency > diff * 2) newStatus = 'offline';
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
