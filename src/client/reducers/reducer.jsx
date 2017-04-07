export default (state = [], action) => {
  switch (action.type){
    case 'ADD_TECH':
        return state.concat(action.payload)
    case 'REMOVE_TECH':
          return  state
    default:
          return state;
  }}
