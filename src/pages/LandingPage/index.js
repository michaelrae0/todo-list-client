import React from 'react'
import { Link } from 'react-router-dom'

import * as landing from './landing.module.scss'
import Container from '../../components/Container'
import Row from '../../components/Row'
import CallToAction from '../../components/CallToAction'

class LandingPage extends React.Component {
  render () {
    return (
      <section className={landing.section}>
        <Container className={landing.container}>
          <Row className={landing.row}>

            <CallToAction />

          </Row>
        </Container>
      </section>
    )
  }
}

export default LandingPage