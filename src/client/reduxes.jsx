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

const store = createStore(reducers)
export default store;
