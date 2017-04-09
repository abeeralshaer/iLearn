import reducer from './reducer.jsx'




it ('action  AddTech adds an object',() => {//eslint-disable-line
  const techs = [{
    tech:'book',
    docs:'book'
  }]
  const action = {
    type: 'ADD_TECH',
    payload: techs
  }

  expect(reducer([],action)).toEqual(techs)//eslint-disable-line
})
