import React from 'react'
import classnames from 'classnames'

import * as search from './search.module.scss'
import { ReactComponent as SearchSVG } from '../../images/search-icon-black.svg'

class Search extends React.Component {
  render () {
    const { className } = this.props

    return (
      <div className={classnames(className, search.component)}>
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