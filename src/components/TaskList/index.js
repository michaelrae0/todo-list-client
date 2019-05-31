import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import * as listStyles from './tasklist.module.scss'
import Row from '../Row'
import { H2, H4 } from '../Typography'
import Task from '../Task'

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deletedIndex: this.props.lists['datelist-1'].taskIds.length,
      fadedIndex: this.props.lists['datelist-1'].taskIds.length
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.lists !== prevProps.lists) {
      const lists = this.props.lists

      this.setState({
        lists
      })
    }
  }

  handleClick = (i) => {
    let { taskIds } = this.props.lists['datelist-1']

    taskIds.splice(i, 1)
    this.setState({
      lists: this.state.lists,
      deletedIndex: i
    })
    setTimeout(() => this.setState({ deletedIndex: taskIds.length }), 200)
  }

  handleBorderFade = (i) => {
    // If last task on list is completed, fade the border above it
    const { taskIds } = this.state.lists['datelist-1']

    if (i === taskIds.length - 1) {
      this.setState({
        fadedIndex: i - 1, // Above deleted task
      })
    }
  }

  render () {
    const { lists } = this.props
    const { deletedIndex, fadedIndex } = this.state
    const list = lists['datelist-1']

    const tasks = list.taskIds.map(taskId => list.tasks[taskId])
    const formattedTasks = tasks.map((task, index) => {
      return (
        <Task 
          task={task} index={index} key={task.id} 
          slideUp={index >= deletedIndex} bordered={index !== tasks.length - 1} fadeBorder={index === fadedIndex}
          handleClick={this.handleClick}
          handleBorderFade={this.handleBorderFade} />
      )
    })

    return (
      <div className={listStyles.component}>
        <Row className={listStyles.row} noMargin >
          <H2 className={list.title} text='Today'/>
          <H4 className={listStyles.toggle} text='Show Completed' />
        </Row>

        <Droppable droppableId={list.id}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {formattedTasks}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
  }
}

export default TaskList;