import React from 'react'
import classnames from 'classnames'

import * as list from './sidenavlist.module.scss'
import { H2, H3 } from '../Typography'


class SubNavList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: null,
    }
  }

  componentDidMount() {
    const { initialSelection, items } = this.props;

    const selected = items.indexOf(initialSelection) !== -1 ? initialSelection : items[0];
    this.setState({
      selected
    });
  }

  render() {
    const { title, items } = this.props;
    const { selected } = this.state;

    const formattedItems = items.map(item => {
      return (
        <div onClick={e => this.setState({ selected: item })} key={item}>
          <H3 className={classnames(list.item, {[list.item__active]: item === selected})} text={item}/>
        </div>
      );
    });

    return (
      <div className={list.component}>
        <H2 className={list.title} text={title}/>
        {formattedItems} 
      </div>
    )
  }
}

export default SubNavList