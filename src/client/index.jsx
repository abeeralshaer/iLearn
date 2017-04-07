import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/configstore.jsx'
import LearnList from './LearnList.jsx'

  const learnList = [{
    tech: 'Java',
    docs: 'http://www.Java.com'
  },
  {
    tech: 'ASP.net',
    docs: 'http://www.ASP.com'
  }]


const render = () => {
  ReactDOM.render(
    <LearnList learnList={learnList} addTech={tech => store.dispatch({ type: 'ADD_TECH',payload:'tech'})}
     removeTech={name => store.dispatch({ type: 'REMOVE_TECH', payload:'dfj'  })}  />,
      document.getElementById('app')
  )
}
render()
store.subscribe(render)
