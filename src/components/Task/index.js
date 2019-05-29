import React from 'react'

import * as task from './task.module.scss'
import Row from '../Row'
import { H1, H2, H3, H4 , H5, H6 } from '../Typography'
import { ReactComponent as CheckMarkSVG } from '../../images/checkmark-black.svg'

class Task extends React.Component {
  render () {
    const { name } = this.props.task;

    return (
      <Row className={task.row} noMargin>
        <div className={task.status} >
          <CheckMarkSVG className={task.status__checkmark}/>
        </div>
        <H2 className={task.title} text={name} />
      </Row>
    )
  }
}

export default Task