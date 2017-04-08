import React from 'react'
import Learn from './Learn.jsx'

class  LearnList extends React.Component {
  constructor(props) {
    super(props)


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
            {  this.props.learnList.map(function(learn) {
              return (
                <Learn
                      key={learn.tech}
                      tech={learn.tech}
                      docs={learn.docs}
                      onRemove={() =>this.props.onRemoveTech(learn.tech,learn.docs)}>
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
