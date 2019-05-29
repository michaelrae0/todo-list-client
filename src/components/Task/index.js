import React from 'react'
import classnames from 'classnames'

import * as task from './task.module.scss'
import Row from '../Row'
import { ReactComponent as CheckMarkSVG } from '../../images/checkmark-black.svg'

//input is h3
class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.task.name,
      slideOut: false,
    }
  }

  handleCheck = () => {
    const { index, handleClick } = this.props

    this.setState({ slideOut: true })
    setTimeout(() => handleClick(index), 550)
  }

  render () {
    const { bordered, slideUp } = this.props
    const { value, slideOut } = this.state

    // wrapper handles opacity transform separately from row's translateX
    return (
      <div className={classnames(task.wrapper, {[task.wrapper__slideOut]: slideOut}, {[task.wrapper__slideUp]: slideUp})}>
        <Row className={classnames(task.row, {[task.row__slideOut]: slideOut})} noMargin>
          <div className={task.status} onClick={this.handleCheck} >
            <CheckMarkSVG className={task.status__checkmark}/>
          </div>
          <input 
            type='text' placeholder='Enter a Task'
            className={task.input}
            value={value}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </Row>
        {bordered && <div className={task.border}/>}
      </div>
    )
  }
}

export default Task