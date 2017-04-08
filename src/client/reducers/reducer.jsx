
var learnList = [{
  tech:'Java',
  docs:'Java.com'
},
{
  tech : 'ASP.NET00',
  docs : 'Learn-ASP.com'
}]


export default (state ={learnList : learnList,tech:'',docs:'', addedTech: []}, action) => {
  switch (action.type){
  case 'ADD_TECH':
    return  Object.assign({},state,
      {
        learnList:[{
          tech:action.tech,
          docs:action.docs},...state.learnList],
        addedTech:[...state.addedTech,'Tech:  ' + action.tech +'  '+'Docs'+ ':  '+ action.docs  ]
      }
  )


  case 'REMOVE_TECH':
    return  Object.assign({},state,
      {
        learnList:state.learnList.splice(state.learnList.indexOf(action.tech),1)
      })

  default:
    return state
  }
}
