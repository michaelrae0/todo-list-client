import React from 'react'
import { Link } from 'react-router-dom'

import * as list from './list.module.scss'
import { H4 } from '../../components/Typography'

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: null,
    }
  }
  render () {
    return (
      <div>
        <div className={list.dates}>
          <H4 text={'Today'}/>
        </div>
        <div className={list.projects}>
          <H4 text={'CS50'} />
        </div>
      </div>
    )
  }
}

export default List;