import React from 'react'

import * as notepad from './notepad.module.scss'
import Task from '../../components/Task'

class Page extends React.Component {
  render () {
    return (
      <div className={notepad.component}>
        {[1,2,3,4,5,6,7,8,9,10,11,12].map(elem => <Task/>)}
      </div>
    )
  }
}

export default Page