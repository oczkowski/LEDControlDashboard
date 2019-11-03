// Redux imports
import { createStore, compose } from 'redux';
import reducers from './reducers';
// Redux DEV TOOLS
const composeEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Creating store
const store = createStore(reducers, composeEnchancers());

// Exporting store
export default store;
