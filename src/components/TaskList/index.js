import React from 'react'

import * as list from './tasklist.module.scss'
import Row from '../Row'
import { H1, H2, H4 } from '../Typography'
import Task from '../Task'

class TaskList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: null,
      tasks: this.props.tasks,
      deletedIndex: null,
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

  handleClick = (i) => {
    let { tasks } = this.props

    tasks.splice(i, 1)
    this.setState({
      tasks,
      deletedIndex: i
    })
  }

  render () {
    const { tasks, deletedIndex } = this.state

    const formattedTasks = tasks.map((task, i) => {
      return (
        <Task task={task} index={i} key={task.name} handleClick={this.handleClick} slideUp={i >= deletedIndex} bordered={i !== tasks.length - 1}/>
      )
    })

    return (
      <div className={list.component}>
        <Row className={list.row} noMargin >
          <H2 className={list.title} text='Today'/>
          <H4 className={list.toggle} text='Show Completed' />
        </Row>
        {formattedTasks}
      </div>
    )
  }
}

export default TaskList;