import React from 'react'
import classnames from 'classnames'
import { Draggable } from 'react-beautiful-dnd'

import * as taskStyles from './task.module.scss'
import Row from '../Row'
import { ReactComponent as CheckMarkSVG } from '../../images/checkmark-black.svg'
import { randomId } from '../../utils/strings'

//input is h3
class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.init ? '' : this.props.task.content,
      slideOut: false,
    }
  }

  componentDidMount() {
    if (this.props.init) this.addedItem.focus(); // automatically focus added items
  }

  handleCheck = () => {
    const { index, handleComplete, handleBorderFade } = this.props

    this.setState({ slideOut: true })         // slide task off list
    handleBorderFade(index)                   // fade top border if task is at bottom of list
    setTimeout(() => handleComplete(index), 400) // delete from list
  }

  handleBlur = (e, naturalBlur = false) => {
    const { init, toggleAdd, addTask } = this.props
    const { value } = this.state

    if (naturalBlur || e.which === 13) { // Blur or enter
      if (init) {
        if (value) addTask(value)
        toggleAdd()
      }
    }
  }

  render () {
    const { task, index, bordered, slideUp, slideDown, fadeBorder, init } = this.props
    const { value, slideOut } = this.state

    const DragHandle = ({ provided }) => { // self executes
      let arr = Array(6).fill('')
      return (
        <div className={classnames(taskStyles.handle, {[taskStyles.handle__hide]: init})} {...provided.dragHandleProps}>
          {arr.map((elem, i) => <div className={taskStyles.handle__dimple} key={i} />)}
        </div>
      )
    }

    // wrapper handles opacity transform separately from row's translateX
    return (
      <Draggable draggableId={task ? task.id : `task-${randomId(10)}`} index={index}>
        {(provided, snapshot) => (

          <div 
            {...provided.draggableProps} ref={provided.innerRef}
            className={classnames(
              taskStyles.wrapper, 
              {[taskStyles.wrapper__slideOut]: slideOut}, 
              {[taskStyles.wrapper__slideUp]: slideUp},
              {[taskStyles.wrapper__slideDown]: slideDown},
              {[taskStyles.wrapper__isDragging]: snapshot.isDragging},
            )}>

            <Row className={classnames(taskStyles.row, {[taskStyles.row__slideOut]: slideOut})} noMargin>
              <DragHandle provided={provided} />
              <div className={taskStyles.status} onClick={this.handleCheck} >
                <CheckMarkSVG className={taskStyles.status__checkmark}/>
              </div>
              <input 
                type='text' placeholder='Enter a Task'
                ref={(input) => { this.addedItem = input; }} 
                className={taskStyles.input}
                value={value}
                onChange={e => this.setState({ value: e.target.value })}
                onBlur={e => this.handleBlur(e, true)} onKeyPress={e => this.handleBlur(e)}
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