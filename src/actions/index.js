// Action types
import { NAVIGATION_TOGGLE } from './types';

// Navigation actions
export const NavigationToggle = toggle => {
    return {
        type: NAVIGATION_TOGGLE,
        payload: { toggle }
    };
};
