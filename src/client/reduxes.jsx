import { createStore, combineReducers } from 'redux';
const techsReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TECH':
    return state.concat(action.payload);
  case 'REMOVE_TECH':
    return state.filter(
        tech =>
          tech.name !== action.payload
      );
  default:
    return state
  }
}

const reducers = combineReducers({
  techs: techsReducer
});

 /* eslint-disable no-underscore-dangle */
const store = createStore(
   reducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */
export default store;
