import React from 'react'
import LearnList from './LearnList.js'
require('./style.css')

class Ilearn extends React.Component {
  constructor () {
    super()
  }
  render () {
    const learnList = [{
      tech: 'Java',
      docs: 'http://www.Java.com'
    },
    {
      tech: 'ASP.net',
      docs: 'http://www.ASP.com'
    }]
    return (<div><LearnList learnList={learnList} /></div>)
  }
}
module.exports = Ilearn
