import React from 'react';
import Learn from './Learn.js'


class LearnList extends React.Component {

constructor(props){
  super(props);

this.state={
  learnList:this.props.learnList,
  tech :'',
  docs:''
}
}

techName(ev){
this.setState({
  tech: ev.target.value
})
}

docName(ev){
  this.setState({
    docs:ev.target.value
  })
}
addTech(){
this.state.learnList.push({
  tech:this.state.tech,
  docs:this.state.docs
});
this.setState({
  learnList:this.state.learnList,
  tech:'',
  docs:''
})
}
removeTech(tech){
  this.setState({
    learnList:this.state.learnList.filter(function(learn){
      return learn.tech !==tech ;
    })
  })
}

render(){
  const learns = this.state.learnList.map(function(learn) {
    return (
      <Learn
        tech={learn.tech}
        key={learn.tech}
        onRemove={this.removeTech.bind(this)}
      >
        {learn.docs}
      </Learn>
    );
  }, this);

return (
  <div>
    <div>
      <div className='form-group'>
        <label htmlFor="name">Tech</label>
        <input
          value={this.state.tech}
          placeholder='Tech Name'
          type='text'
          onChange={this.techName.bind(this)}
          className='form-control'
          id='TechName'
        />
      </div>
      <div className='form-group'>
        <label htmlFor="Docs">Docs</label>
        <input
          value={this.state.docs}
onChange={this.docName.bind(this)}
          placeholder='Docs'
          type='text'
          className='form-control'
          id='Docs'
        />
      </div>
      <div className='form-group'>
        <button  /*TODO style() function)*/
          className='btn btn-default'
          onClick={this.addTech.bind(this)}
        >
          Add
        </button>
      </div>
    </div>
    <table className='table table-condensed'>
      <thead>
        <tr>
           <th>Tech</th>
           <th>Docs</th>
           <th></th>
        </tr>
      </thead>
      <tbody>
      {learns}
      </tbody>
    </table>
  </div>);

}
}
export default LearnList;
