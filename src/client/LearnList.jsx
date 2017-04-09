import React from 'react'
import Learn from './Learn.jsx'
const LearnList = (props)=>
{
  const learns = props.learnList.map(function (learn) {
    return (<Learn
    tech = {learn.tech}
    key = {learn.tech}
    docs = {learn.docs}
    onRemove = {() =>  props.onRemove(learn.tech)}
    />
    )
  })
  return (
    <table className="table">
      <thead>
        <tr>
          <th> Tech </th>
          <th> Docs </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {learns}
      </tbody>
    </table>
  )}
export default LearnList;
LearnList.propTypes = {
  tech:React.PropTypes.array,
  learnList:React.PropTypes.array,
  onRemove:React.PropTypes.func
}
