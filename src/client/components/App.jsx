import React from 'react' // ← Main React library
import ReactDOM from 'react-dom' // ← Main react library
import { Provider } from 'react-redux' //← Bridge React and Redux
import { createStore, combineReducers } from 'redux'// ← Main Redux library
import reducer from '../reducers/reducer.jsx' // ← List of Reducers we created
//Import all components we created earlier
import RemoveTech from '../container/removeTech.jsx'
import AddTech from'../container/addTech.jsx'
import LearnList from './LearnList.jsx'
import LearnForm from './LearnForm.jsx'

const reducers  = combineReducers({
  techs: reducer
})
let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const App = (props) =>
  <div>
    <LearnForm addTech={props.onAdd} />
    <LearnList learnList={props.techs} removeTech={props.onRemove}/>
  </div>

const render = () => ReactDOM.render(
  <App
    techs={store.getState().techs}
    onAdd={tech => store.dispatch({ type: 'ADD_TECH', payload: tech })}
    onRemove={name => store.dispatch({ type: 'REMOVE_TECH', payload: name })}
  />,
  document.getElementById('app')
)

render()
store.subscribe(render)
