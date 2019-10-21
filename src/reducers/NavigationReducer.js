// Action types
import { NAVIGATION_TOGGLE } from '../actions/types';

export default (state = { toggle: false }, action) => {
    switch (action.type) {
        case NAVIGATION_TOGGLE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
