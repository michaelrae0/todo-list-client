import React from 'react'

import * as sidenav from './sidenav.module.scss'
import SideNavList from '../SideNavList'

class SideNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 'today',
    }
  }

  static defaultProps = {
    dates: [
      'Today',
      'Yesterday',
      'Tomorrow'
    ],
    projects: [
      'CS50',
      'Capital',
      'Zimmerman'
    ]
  }

  render () {
    const { dates, projects } = this.props

    return (
      <div className={sidenav.sidenav}>
        <SideNavList title='Dates' items={dates} initialSelection='Today'/>
        <SideNavList title='Projects' items={projects} />
      </div>
    )
  }
}

export default SideNav;