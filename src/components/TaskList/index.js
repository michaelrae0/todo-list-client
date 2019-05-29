import React from 'react'

import * as list from './tasklist.module.scss'
import Row from '../Row'
import { H1, H4 } from '../Typography'
import Task from '../Task'

class TaskList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: null,
    }
  }

  static defaultProps = {
    tasks: [
      {
        name: 'Wash car',
        status: 'incomplete',
        notes: null
      },
      {
        name: 'Clean Kitchen',
        status: 'incomplete',
        notes: null
      },
      {
        name: 'Wash dishes',
        status: 'incomplete',
        notes: null
      },
      {
        name: 'Learn Programming',
        status: 'incomplete',
        notes: null
      },
      {
        name: 'Vacuum',
        status: 'incomplete',
        notes: null
      }
    ]
  }

  render () {
    const { tasks } = this.props

    const formattedTasks = tasks.map(task => {
      return (
        <Task task={task} key={task.name}/>
      )
    })

    return (
      <div className={list.component}>
        <Row className={list.row} noMargin >
          <H1 className={list.title} text='Today'/>
          <H4 className={list.toggle} text='Show Completed' />
        </Row>
        {formattedTasks}
      </div>
    )
  }
}

export default TaskList;