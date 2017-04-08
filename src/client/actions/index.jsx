export const addTech = (tech,docs) =>(
  {
    type : 'ADD_TECH',
    tech,
    docs

  })

export const removeTech = (learnList)=>(
  {
    type:'REMOVE_TECH',
    learnList
  })
