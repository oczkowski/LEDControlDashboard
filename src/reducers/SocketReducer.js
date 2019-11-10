// Action types
import { S_RECEIVE_ROOMS, S_UPDATE_ONLINE_STATUS } from '../actions/types';

function combineObjectPropertyObject(state, objectToMerge) {
    let combined = {};
    for (let key in objectToMerge) {
        combined[key] = { ...state[key], ...objectToMerge[key] };
    }
    return { ...state, ...combined };
}

export default (state = {}, action) => {
    switch (action.type) {
        case S_RECEIVE_ROOMS:
            return combineObjectPropertyObject(state, action.payload.rooms);
        case S_UPDATE_ONLINE_STATUS:
            return combineObjectPropertyObject(state, action.payload.status);
        default:
            return state;
    }
};
