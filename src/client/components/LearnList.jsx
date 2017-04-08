import React from 'react'
import Learn from './Learn.jsx'

class  LearnList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      learnList: props.learnList



    }


  }


  render(){
    return (
      <div>
        <table className='table table-condensed'>
          <thead>
            <tr>
              <th>Techs</th>
              <th>Docs</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {  this.state.learnList.map(function(learn) {
              return (
                <Learn
                      key={learn.tech}
                      tech={learn.tech}
                      docs={learn.docs}
                      onRemove={() =>this.props.onRemoveTech(learn.tech)}>
                  {learn.tech}
                </Learn>
              )
            }, this)}
          </tbody>
        </table>
      </div>
    )





  }
}


LearnList.propTypes = {
  onRemoveTech:React.PropTypes.func.isRequired,
  learnList : React.PropTypes.array.isRequired

}
export default LearnList
