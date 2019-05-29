import React from 'react'

import * as notepad from './notepad.module.scss'
import Header from '../../components/Header'
import Task from '../../components/Task'

class Page extends React.Component {
  render () {
    return (
      <div className={notepad.component}>
        <Header />
      </div>
    )
  }
}

export default Page