
import { connect} from 'react-redux'
import LearnList from '../components/LearnList.jsx'
import {removeTech} from '../actions/index.jsx'






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

const RemoveTech = connect(mapStateToProps,mapDispatchToProps)(LearnList)


export default RemoveTech
