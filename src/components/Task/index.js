import React from 'react'
import classnames from 'classnames'
import { Draggable } from 'react-beautiful-dnd'

import * as taskStyles from './task.module.scss'
import Row from '../Row'
import { ReactComponent as CheckMarkSVG } from '../../images/checkmark-black.svg'

//input is h3
class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.task.content,
      slideOut: false,
    }
  }

  handleCheck = () => {
    const { index, handleClick, handleBorderFade } = this.props

    this.setState({ slideOut: true })         // slide task off list
    handleBorderFade(index)                   // fade top border if task is at bottom of list
    setTimeout(() => handleClick(index), 400) // delete from list
  }

  render () {
    const { task, index, bordered, slideUp, fadeBorder } = this.props
    const { value, slideOut } = this.state

    // wrapper handles opacity transform separately from row's translateX
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (

          <div 
            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
            className={classnames(
              taskStyles.wrapper, 
              {[taskStyles.wrapper__slideOut]: slideOut}, 
              {[taskStyles.wrapper__slideUp]: slideUp}
            )}>

            <Row className={classnames(taskStyles.row, {[taskStyles.row__slideOut]: slideOut})} noMargin>
              <div className={taskStyles.status} onClick={this.handleCheck} >
                <CheckMarkSVG className={taskStyles.status__checkmark}/>
              </div>
              <input 
                type='text' placeholder='Enter a Task'
                className={taskStyles.input}
                value={value}
                onChange={e => this.setState({ value: e.target.value })}
              />
            </Row>
            {bordered && <div className={classnames(taskStyles.border, {[taskStyles.border__fadeOut]: fadeBorder})}/>}

          </div>

        )}
      </Draggable>
    )
  }
}

export default Task