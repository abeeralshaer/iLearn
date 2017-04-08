import React from 'react'

const Learn = ({tech,docs,onRemove})=>{

  return (
    <tr>
      <td>{tech}</td>
      <td><a href={docs}>{docs}</a></td>
      <td>
        <button type='button' className='close'
      onClick={onRemove}
      >
          <span>&times;</span>
        </button>
      </td>
    </tr>
  )

}


Learn.propTypes ={
  onRemove:React.PropTypes.func.isRequired,
  tech :React.PropTypes.string.isRequired,
  docs :React.PropTypes.string.isRequired
}
export default Learn
