import React from 'react'
import classnames from 'classnames'

import * as add from './additem.module.scss'
import Row from '../Row'
import { H3 } from '../Typography'

const AddItem = ({ slideUp, slideDown, toggleAdd }) => {
  if (slideUp) setTimeout(() => slideUp = false, 200)

  return (
    <Row 
      className={classnames(
        add.row, 
        {[add.row__slideDown]: slideDown},
        {[add.row__slideUp]: slideUp},
      )} noMargin>
      <div onClick={toggleAdd}>
        <H3 className={add.title} text='+ Add Item'  />
      </div>
    </Row>
  )
}

export default AddItem;