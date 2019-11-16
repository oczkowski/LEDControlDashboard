// Action types
import {
    // Mavigation
    NAVIGATION_TOGGLE,
    // Sockets
    S_RECEIVE_ROOMS,
    S_UPDATE_ONLINE_STATUS,
    // Manipulating sockets
    MS_UPDATE_ROOM_DATA,
    MS_UPDATE_ROOM_CONFIG
} from './types';

// Navigation actions
export const NavigationToggle = toggle => {
    return {
        type: NAVIGATION_TOGGLE,
        payload: { toggle }
    };
};

// Socket interraction
export const ReceiveRooms = rooms => {
    return {
        type: S_RECEIVE_ROOMS,
        payload: { rooms }
    };
};
export const UpdateOnlineStatus = status => {
    return {
        type: S_UPDATE_ONLINE_STATUS,
        payload: { status }
    };
};

// Maniupulating rooms in redux (Reducers emit to socket)
export const UpdateRoomData = (roomName, update) => {
    return {
        type: MS_UPDATE_ROOM_DATA,
        payload: {
            roomName,
            update
        }
    };
};

export const UpdateRoomConfig = (roomName, update) => {
    return {
        type: MS_UPDATE_ROOM_CONFIG,
        payload: {
            roomName,
            update
        }
    };
};
