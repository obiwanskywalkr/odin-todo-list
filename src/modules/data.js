const userLists = [
    {title: 'List 1', 
    description: 'foobar', 
    tasks: [{title: 'Critical task', priority: 'critical', dueDate: '2022-07-19T16:20', list: 'List 1', subtasks: [{title: 'foo', subtask: 1}], notes: 'bar', completed: 'false', taskID: 1}], 
    listID: 1},

    {title: 'List 2', 
    description: 'foobar!', 
    tasks: [{title: 'Important task', priority: 'important', dueDate: '2022-10-22T16:20', list: 'List 2', subtasks: [{title: 'foo!', subtask: 1}], notes: 'bar!', completed: 'false', taskID: 2}], 
    listID: 2},
    
    {title: 'List 3', 
    description: 'foobar?', 
    tasks: [{title: 'Regular task', priority: 'low', dueDate: '2022-10-22T16:20', list: 'List 3', subtasks: [{title: 'foo?', subtask: 1}], notes: 'bar?', completed: 'false', taskID: 3}], 
    listID: 3},
]

const allTasks = [];

export { userLists, allTasks }