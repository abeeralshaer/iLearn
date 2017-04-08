import React from 'react'
import { connect} from 'react-redux'
import LearnList from '../components/LearnList.jsx'
import {removeTech} from '../actions/index.jsx'



var learnList = [{
  tech:'Java',
  docs:'Java.com'
},
{
  tech : 'ASP.NET00',
  docs : 'Learn-ASP.com'
}]

let RemoveTech = () => {

  return (
    <LearnList learnList = {learnList} onRemoveTech = {()=>{}}/>
  )
}
const mapStateToProps = (state) =>{
  return {
    learnList : state.learnList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveTech:(tech) => {dispatch(removeTech(tech))}

  }
}

RemoveTech = connect(mapStateToProps,mapDispatchToProps)(RemoveTech)


export default RemoveTech
