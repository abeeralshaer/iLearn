import React from 'react' // ← Main React library
import ReactDOM from 'react-dom' // ← Main react library
import { createStore, combineReducers } from 'redux'// ← Main Redux library
import reducer from '../reducers/reducer.jsx'
import LearnList from './LearnList.jsx' // ← List of Reducers we created
// import LearnList from './LearnList.jsx'
import LearnForm from './LearnForm.jsx'

const reducers  = combineReducers({
  techs: reducer
})
const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//eslint-disable-line
const App = (props) =>
  <div>
    <LearnForm addTech={props.onAdd} />
    <LearnList learnList={props.techs} onRemoveTech={props.onRemove}/>
  </div>

const render = () => ReactDOM.render(//eslint-disable-line
  <App
    techs={store.getState().techs}
    onAdd={tech => store.dispatch({ type: 'ADD_TECH', payload: tech })}
    onRemove={tech => store.dispatch({ type: 'REMOVE_TECH', payload: tech })}
   />,
  document.getElementById('app')//eslint-disable-line
)

render();
store.subscribe(render)

App.propTypes = {

  techs:React.PropTypes.array.isRequired,
  onAdd:React.PropTypes.func.isRequired,
  onRemove:React.PropTypes.func.isRequired

}
