const React = require('react')
const ReactDOM = require('react-dom')
const Ilearn = require('./ilearn')

const render = () => {
  ReactDOM.render(
      <Ilearn/>,
      document.getElementById('app')
  )
}
render()
