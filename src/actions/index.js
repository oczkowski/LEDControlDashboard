// Action types
import {
    NAVIGATION_TOGGLE,
    S_RECEIVE_ROOMS,
    S_UPDATE_ONLINE_STATUS
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
