



export default (state =[], action) => {

  switch (action.type){
  case 'ADD_TECH':
    return  state.concat(action.payload)
  case 'REMOVE_TECH':
    return state.filter((learn)=>
      learn.tech !==action.payload)

  default:
    return state
  }
}
