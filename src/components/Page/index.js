import React from 'react'

import * as page from './page.module.scss'
import Task from '../Task'

class Page extends React.Component {
  render () {
    return (
      <div>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    )
  }
}

export default Page