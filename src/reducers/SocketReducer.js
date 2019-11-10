// Action types
import { S_RECEIVE_ROOMS, S_UPDATE_ONLINE_STATUS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case S_RECEIVE_ROOMS:
            return { ...state, ...action.payload.rooms };
        case S_UPDATE_ONLINE_STATUS:
            var updatedRooms = {};
            let { status } = action.payload;
            for (let key in status) {
                updatedRooms[key] = { ...state[key], status: status[key] };
            }
            return { ...state, ...updatedRooms };
        default:
            return state;
    }
};
