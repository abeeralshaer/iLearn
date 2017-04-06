import React from 'react'
import LearnList from './LearnList.jsx'

const Ilearn = ()=>{
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
export default Ilearn
