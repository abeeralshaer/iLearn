import React from 'react'

class Learn extends React.Component {
  onRemoveClick () {
    this.props.onRemove(this.props.tech)
  }

  render () {
    return (<tr>
      <td>{this.props.tech}</td>
      <td><a href={this.props.children}>{this.props.children}</a></td>
      <td>
        <button type='button' className='close'
        onClick={this.onRemoveClick.bind(this)}
        >
          <span>&times;</span>
        </button>
      </td>
    </tr>)
  }
}
export default Learn
