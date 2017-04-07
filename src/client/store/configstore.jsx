import { createStore, combineReducers } from 'redux';
import techReducers from '../reducers/reducer.jsx'



const store = createStore(techReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store);
export default store;
