import React from 'react'

import * as notepad from './notepad.module.scss'
import Container from '../../components/Container'
import Row from '../../components/Row'
import SideNav from '../../components/SideNav'
import TaskListContainer from '../../containers/TaskListContainer'

class Notepad extends React.Component {
  render () {
    return (
      <section className={notepad.section}>
        <Container className={notepad.container}>
          <Row className={notepad.row}>
            <SideNav />
            <TaskListContainer />
          </Row>
        </Container>
      </section>
    )
  }
}

export default Notepad