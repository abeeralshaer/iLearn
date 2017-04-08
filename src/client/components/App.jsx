import React from 'react' // ← Main React library
import ReactDOM from 'react-dom' // ← Main react library
import { Provider } from 'react-redux' //← Bridge React and Redux
import { createStore } from 'redux'// ← Main Redux library
import reducers from '../reducers/reducer.jsx' // ← List of Reducers we created
//Import all components we created earlier
import RemoveTech from '../container/removeTech.jsx'
import AddTech from'../container/addTech.jsx'

let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AddTech/>
      <RemoveTech/>
    </div>
  </Provider> ,
   document.getElementById('app') //<-- Render to a div w/ id "root"
)
