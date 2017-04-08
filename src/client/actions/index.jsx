export const addTech = (tech) =>(
  {
    type : 'ADD_TECH',
    tech
  })

export const removeTech = (learnList)=>(
  {
    type:'REMOVE_TECH',
    learnList
  })
