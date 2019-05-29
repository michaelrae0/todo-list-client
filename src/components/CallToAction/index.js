import React from 'react'
import { Link } from 'react-router-dom'

import * as cta from './calltoaction.module.scss'
import { H2, H3 } from '../../components/Typography'

class CallToAction extends React.Component {
  render () {
    return (
      <div className={cta.component} >
        <div className={cta.image__container}>
          <img src="https://img.icons8.com/dotty/80/000000/copybook.png" alt='' />
        </div>
        <H2 className={cta.text__title} bold
          text={'Create a Personal Todo List'} />
        <H3 className={cta.text__subtitle}
          text={'Plan your day, track errands, and keep your life organized.'} />
        <Link className={cta.btn} to='/notes'>
          <H3 text={'Get Started'} />
        </Link>
      </div>
    )
  }
}

export default CallToAction;