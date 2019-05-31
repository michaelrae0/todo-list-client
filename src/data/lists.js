const tasks = {
  'task-1': { id: 'task-1', status: 'incomplete', content: 'Wash car', notes: null },
  'task-2': { id: 'task-2', status: 'incomplete', content: 'Clean kitchen', notes: null },
  'task-3': { id: 'task-3', status: 'incomplete', content: 'Wash dishes', notes: null },
  'task-4': { id: 'task-4', status: 'incomplete', content: 'Learn programming',  notes: null },
  'task-5': { id: 'task-5', status: 'incomplete', content: 'Vacuum', notes: null },
  'task-6': { id: 'task-6', status: 'incomplete', content: 'Read a book', notes: null },
  'task-7': { id: 'task-7', status: 'incomplete', content: 'Talk to Elon Musk', notes: null },
  'task-8': { id: 'task-8', status: 'incomplete', content: 'Google cats', notes: null },
  'task-9': { id: 'task-9', status: 'incomplete', content: 'Steal Elon\'s job',  notes: null },
  'task-10': { id: 'task-10', status: 'incomplete', content: 'Go to Mars', notes: null }
}

const datelist1 = {
  id: 'datelist-1',
  tasks,
  taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
}

const datelist2 = {
  id: 'datelist-2',
  tasks,
  taskIds: ['task-6', 'task-7', 'task-8', 'task-9', 'task-10'],
}

const lists = {
  'datelist-1': datelist1,
  'datelist-2': datelist2,
}

export default lists