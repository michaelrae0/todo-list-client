const tasks = {
  'task-1': { id: 'task-1', status: 'incomplete', content: 'Wash car', notes: null },
  'task-2': { id: 'task-2', status: 'incomplete', content: 'Clean Kitchen', notes: null },
  'task-3': { id: 'task-3', status: 'incomplete', content: 'Wash dishes', notes: null },
  'task-4': { id: 'task-4', status: 'incomplete', content: 'Learn Programming',  notes: null },
  'task-5': { id: 'task-5', status: 'incomplete', content: 'Vacuum', notes: null }
}

const lists = {
  'datelist-1': {
    id: 'datelist-1',
    tasks,
    taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
  }
}

export default lists