import React from 'react'
const Learn = (props)=>{
  return (<tr>
    <td>{props.tech}</td>
    <td><a href={props.docs}>{props.docs}</a></td>
    <td>
      <button type='button' className='close'
      onClick={()=>props.onRemove(props.tech)}
      >
        <span>&times;</span>
      </button>
    </td>
  </tr>)
}
Learn.propTypes ={
  onRemove:React.PropTypes.func,
  tech :React.PropTypes.string,
  docs :React.PropTypes.string
}
export default Learn
