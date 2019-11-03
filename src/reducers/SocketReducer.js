// Action types
import { S_RECEIVE_ROOMS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case S_RECEIVE_ROOMS:
            return { ...state, ...action.payload.rooms };
        default:
            return state;
    }
};
