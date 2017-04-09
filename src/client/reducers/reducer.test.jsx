
import reducer from './reducer.jsx'
import deepFreeze from 'deep-freeze'
import test from 'tape'




test('app reducer AddTech',(t) => {
  const stateBefore = {
    addTech : false
  }
  const stateAfter = {
    addTech : true
  }
  deepFreeze(stateBefore)
  deepFreeze(stateAfter)

  t.deepEqual(reducer({learnList:[{tech:'ff',docs:''}],addedTech:[],addTech:false},{type:'ADD_TECH'}),{addTech:true},

    'addTech should change the addTech to true'
  )

  t.end()

});
