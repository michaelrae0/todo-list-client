import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import * as listStyles from './tasklist.module.scss'
import Row from '../Row'
import { H2, H4 } from '../Typography'
import Task from '../Task'
import AddItem from '../AddItem'

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deletedIndex: 100000,
      fadedIndex: 100000,
      addItem: false,
    }
  }

  handleComplete = (i) => {
    let { taskIds } = this.props.lists['datelist-1']

    taskIds.splice(i, 1)
    // temporarily determine which tasks to animate
    this.setState({ deletedIndex: i })
    setTimeout(() => this.setState({ deletedIndex: 1000000 }), 200) 
  }

  handleBorderFade = (i) => {
    const { taskIds } = this.props.lists['datelist-1']
    if (i === taskIds.length - 1) this.setState({ fadedIndex: i - 1 }); // fade border above bottom task
  }

  toggleAdd = () => {
    this.setState({ addItem: !this.state.addItem })
  }

  addTask = (content) => {
    const task = {
      listId: 'datelist-1',
      content,
    }
    
    this.props.dispatch({ type: 'ADD_ITEM', task })
  }

  render () {
    const { lists } = this.props
    const { deletedIndex, fadedIndex, addItem } = this.state
    const list = lists['datelist-1']

    const tasks = list.taskIds.map(taskId => list.tasks[taskId])
    const formattedTasks = tasks.map((task, index) => {
      return (
        <Task 
          task={task} index={index} key={task.id} 
          slideUp={index >= deletedIndex} 
          bordered={(index !== tasks.length - 1) || (addItem)} fadeBorder={index === fadedIndex}
          handleComplete={this.handleComplete}
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
              {addItem && <Task init slideDown index={tasks.length} toggleAdd={this.toggleAdd} addTask={this.addTask}/>}
              {provided.placeholder}
            </div>
          )}
        </Droppable> 

        <AddItem 
          toggleAdd={this.toggleAdd} 
          index={tasks.length} 
          slideDown={addItem} 
          slideUp={tasks.length > deletedIndex} />
      </div>
    )
  }
}

export default TaskList;