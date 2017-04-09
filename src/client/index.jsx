import React from 'react'
import ReactDOM from 'react-dom'
import LearnList from './LearnList.jsx'
import LearnForm from './LearnForm.jsx'
import store from './reduxes.jsx'
const render = () => {
  ReactDOM.render(
    <div>
      <div className="main">
        <LearnForm  onAdd={tech => store.dispatch({ type: 'ADD_TECH', payload: tech })}
          />
        <LearnList learnList={store.getState().techs}
          onRemove={techName => store.dispatch({ type: 'REMOVE_TECH', payload: techName })}/>
      </div> </div>,
    // eslint-disable-next-line
      document.getElementById('app')
  )
}
render()
store.subscribe(render)
