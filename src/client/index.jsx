import React from 'react'
import ReactDOM from 'react-dom'
import Ilearn from './ilearn.jsx'
import store from './reduxes.jsx'
const render = () => {
  ReactDOM.render(
    <Ilearn
      techs={store.getState().techs}
      onAdd={tech => store.dispatch({ type: 'ADD_TECH', payload: tech })}
      onRemove={techName => store.dispatch({ type: 'REMOVE_TECH', payload: techName })}/>,
      // eslint-disable-next-line
      document.getElementById('app')
  )
}
render()
store.subscribe(render)
