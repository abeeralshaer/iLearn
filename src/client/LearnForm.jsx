import React from 'react'
class LearnForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tech: '',
      docs: ''
    }
  }
  techName (ev) {
    this.setState({
      tech: ev.target.value
    })
  }
  docName (ev) {
    this.setState({
      docs: ev.target.value
    })
  }
  render () {
    return (<div>
      <h1>Ilearn Wishlist</h1>
      <div>
        <div className = 'form-group'>
          <label htmlFor = "name" > Tech </label> <input
                value = {
                    this.state.tech
                }
                placeholder = 'Tech Name'
                type = 'text'
                onChange = {
                    this.techName.bind(this)
                }
                className = 'form-control'
                id = 'TechName'/>
        </div> <div className = 'form-group'>
          <label htmlFor = "Docs" > Docs </label>
          <input value = {
                    this.state.docs
                }
                onChange = {
                    this.docName.bind(this)
                }
                placeholder = 'Docs'
                type = 'text'
                className = 'form-control'
                id = 'Docs' />
        </div> <div
         className = 'form-group'>
          <button className = 'btn btn-default'
                onClick = {
                  ()=>  this.props.onAdd(this.state)
                }>
                Add </button>
        </div>

      </div>

    </div> )
  }
    }
LearnForm.propTypes = {
  learnList:React.PropTypes.array,
  onAdd:React.PropTypes.func,
  docs:React.PropTypes.string
}
export default LearnForm
