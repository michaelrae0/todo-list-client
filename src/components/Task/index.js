import React from 'react'

import * as task from './task.module.scss'
import { H1, H2, H3, H4 , H5, H6 } from '../Typography'

class Task extends React.Component {
  render () {
    return (
      <div className={task.component}>
        <H3 className={task.title} text={'Clean car'} />
      </div>
    )
  }
}

export default Task