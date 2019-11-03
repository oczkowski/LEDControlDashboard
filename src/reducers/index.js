// Redux
import { combineReducers } from 'redux';
// Reducers
import navigationReducer from './NavigationReducer';
import socketReducer from './SocketReducer';

export default combineReducers({
    navigation: navigationReducer,
    rooms: socketReducer
});
