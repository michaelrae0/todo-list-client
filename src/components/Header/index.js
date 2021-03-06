import React from 'react'
import { Link } from 'react-router-dom'

import * as header from './header.module.scss'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Search from '../Search'

class Header extends React.Component {
  render () {
    return (
      <header className={header.header} >
        <Container className={header.container}>
          <Row className={header.row}>
            <Link to='/'>
              <img className={header.icon} src="https://img.icons8.com/dotty/80/000000/copybook.png" alt="Home" />
            </Link>
            <Search className={header.search}/>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header;