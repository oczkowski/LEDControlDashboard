// Action types
import { NAVIGATION_TOGGLE, S_RECEIVE_ROOMS } from './types';

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
