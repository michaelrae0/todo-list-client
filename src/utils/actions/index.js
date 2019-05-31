export function getData(data) {
  return {
    type: 'GET_DATA',
    data,
  }
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item,
  }
}

export function swapItems(result) {
  return {
    type: 'SWAP_ITEMS',
    result,
  }
}

export function removeItem(index) {
  return {
    type: 'REMOVE_SYSTEM',
    index,
  }
}