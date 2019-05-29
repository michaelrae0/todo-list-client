import React from 'react'
import { Link } from 'react-router-dom'

import * as landing from './landing.module.scss'
import Container from '../../components/Container'
import Row from '../../components/Row'
import { H1, H2, H3, H4 , H5, H6 } from '../../components/Typography'
import { RaceOperator } from 'rxjs/internal/observable/race';

class LandingPage extends React.Component {
  render () {
    return (
      <section className={landing.section}>
        <Container className={landing.container}>
          <Row className={landing.row}>

            <div className={landing.component} >
              <div className={landing.image__container}>
                <img src="https://img.icons8.com/dotty/80/000000/copybook.png" />
              </div>
              <H2 className={landing.text__title} bold
                text={'Create a Personal Todo List'} />
              <H3 className={landing.text__subtitle}
                text={'Plan your day, track errands, and keep your life organized.'} />
              <Link className={landing.btn} to='/notes'>
                <H3 text={'Get Started'} />
              </Link>
            </div>

          </Row>
        </Container>
      </section>
    )
  }
}

export default LandingPage