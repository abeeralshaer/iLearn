import React from 'react'
import LearnList from './LearnList.jsx'

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
    return (<LearnList learnList={learnList} />)
  }
}
module.exports = Ilearn
