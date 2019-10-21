// Redux
import { combineReducers } from 'redux';
// Reducers
import navigationReducer from './NavigationReducer';

export default combineReducers({
    navigation: navigationReducer
});
