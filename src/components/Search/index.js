import React from 'react'
import { Link } from 'react-router-dom'

import * as search from './search.module.scss'
import Container from '../../components/Container'
import Row from '../../components/Row'
import { H2, H3 } from '../../components/Typography'
import { ReactComponent as SearchSVG } from '../../images/search-icon-black.svg'

class Search extends React.Component {
  render () {
    return (
      <div className={search.component}>
        <SearchSVG className={search.icon} />

        <input
          type='text' placeholder='Search'
          // value={searchValue}
          // id={isFullSized ? 'fullBar' : 'smallBar' }
          className={search.input}
          // onClick={this.handleBarClick}
          // onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Search;