import React from 'react'

import * as notepad from './notepad.module.scss'
import Container from '../../components/Container'
import Row from '../../components/Row'
import SideNav from '../../components/SideNav'
import TaskList from '../../components/TaskList'

class Notepad extends React.Component {
  render () {
    return (
      <section className={notepad.section}>
        <Container className={notepad.container}>
          <Row className={notepad.row}>
            <SideNav />
            <TaskList />
          </Row>
        </Container>
      </section>
    )
  }
}

export default Notepad