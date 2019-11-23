// Action types
import {
    S_RECEIVE_ROOMS,
    S_UPDATE_ONLINE_STATUS,
    MS_UPDATE_ROOM_DATA,
    MS_UPDATE_ROOM_CONFIG
} from '../actions/types';
import socket from '../socket.io';

function combineObjectPropertyObject(state, objectToMerge) {
    let combined = {};
    for (let key in objectToMerge) {
        combined[key] = {
            status: 'offline' /* Default offline status */,
            ...state[key],
            ...objectToMerge[key]
        };
    }
    return { ...state, ...combined };
}

export default (state = {}, action) => {
    switch (action.type) {
        // Socket
        case S_RECEIVE_ROOMS:
            return combineObjectPropertyObject(state, action.payload.rooms);
        case S_UPDATE_ONLINE_STATUS:
            return combineObjectPropertyObject(state, action.payload.status);
        // Manual manipulation (Single Room)
        case MS_UPDATE_ROOM_DATA: {
            let { roomName, update } = action.payload;
            const newState = {
                ...state,
                [roomName]: { ...state[roomName], data: update }
            };
            // Update socket
            socket.emit('update_room_data', { roomName, data: update });
            // Update redux
            return newState;
        }
        case MS_UPDATE_ROOM_CONFIG: {
            let { roomName, update } = action.payload;
            const newState = {
                ...state,
                [roomName]: { ...state[roomName], config: update }
            };
            // Update socket
            socket.emit('update_room_config', { roomName, config: update });
            // Update redux
            return newState;
        }
        // Default
        default:
            return state;
    }
};
