
import { connect } from 'react-redux'
import LearnForm from '../components/LearnForm.jsx'
import {addTech} from '../actions/index.jsx'

const mapStateToProps = (state) =>{
  return {
    tech : state.tech
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd:(tech) => {dispatch( addTech(tech))}

  }
}

const AddTech= connect(mapStateToProps,mapDispatchToProps)(LearnForm)


export default AddTech
