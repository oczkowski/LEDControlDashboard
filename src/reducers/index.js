// Redux
import { combineReducers } from 'redux';
// Reducers
import navigationReducer from './NavigationReducer';
import roomsReducer from './RoomsReducer';

export default combineReducers({
    navigation: navigationReducer,
    rooms: roomsReducer
});
