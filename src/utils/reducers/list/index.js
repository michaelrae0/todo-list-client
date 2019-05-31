import initialState from '../../../data'

function reorderList(state, result) {
  const { destination, source, draggableId } = result;
  const lists = state

  // Ends up in original position
  if (!destination) return;
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  // Swap indexes
  const list = lists[source.droppableId];
  let newTaskIds = Array.from(list.taskIds)
  newTaskIds.splice(source.index, 1);
  newTaskIds.splice(destination.index, 0, draggableId);

  const newList = {
    ...list,
    taskIds: newTaskIds,
  }

  return newList
}



const listReducer = (state = initialState.lists, action) => {
  switch (action.type) {
    case 'SWAP_ITEMS':
      const newList = reorderList(state, action.result)
      
      if (newList) {
        return {
          ...state,
          [newList.id]: newList,
        }
      } else return state

      
    default:
      return state;
  }
}

export default listReducer;