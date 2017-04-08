
import { connect } from 'react-redux'
import LearnForm from '../components/LearnForm.jsx'
import {addTech} from '../actions/index.jsx'

const mapStateToProps = (state) =>{

  return {

    tech : state.tech,
    docs: state.docs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd:(tech,docs) => {dispatch( addTech(tech,docs))}

  }
}

const AddTech= connect(mapStateToProps,mapDispatchToProps)(LearnForm)


export default AddTech
