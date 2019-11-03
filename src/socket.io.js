// Redux store
import store from './reduxStore';
// Socket.io
import io from 'socket.io-client';
// Actions
import { ReceiveRooms } from './actions';

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
let ledStatus = {};
socket.on('rooms_keepalive', data => (lastconnected = data));

let diff = 2000;
setInterval(() => {
    for (let key in lastconnected) {
        let latency = new Date() - lastconnected[key] * 1000;
        ledStatus[key] =
            latency < diff && diff > 0 - diff ? 'online' : 'reboot';
        if (latency > 7000) ledStatus[key] = 'offline';
    }
    // Update redux
}, 100);

export default socket;
