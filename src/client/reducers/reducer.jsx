export default (state =[{learnList : [{tech:''}]}], action) => {
  switch (action.type){
  case 'ADD_TECH':
    return state[0].learnList.push(action.tech)
  case 'REMOVE_TECH':
    return  action
  default:
    return state
  }
}
