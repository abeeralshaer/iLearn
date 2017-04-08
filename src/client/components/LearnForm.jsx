import React from 'react'

class LearnForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tech :''
    }
  }


  render(){

    let input
    return (
      <div>
        <div className='form-group'>
          <label>Techs</label>
          <input
              ref ={node => {input = node}}
              onChange={(e)=>{this.setState({tech:e.target.value})}}
              placeholder='Techs'
              type='text'
              className='form-control'
              id='Tech'  />
        </div>
        <div className='form-group'>
          <button  className='btn btn-default' onClick={()=>this.props.onAdd(this.state.tech)}>
            Add
            </button>
        </div>
      </div>

    )
  }
}

LearnForm.propTypes = {

  onAdd : React.PropTypes.func.isRequired
}

export default LearnForm
