import React from 'react'
import LearnList from './LearnList.jsx'
import LearnForm from './LearnForm.jsx'

const Main = () => {

  return(
    <div>
      <LearnForm changeTech={()=>{}} onAdd={()=>{}}/>
      <LearnList learnList={[{
        tech:'Java',
        docs:'Java.com'
      },
      {
        tech : 'ASP.NET00',
        docs : 'Learn-ASP.com'
      }]} onRemoveTech={()=>{}}/>
    </div>
  )
}

export default Main
