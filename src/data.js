import './style.css';

const List = (title, description, listID) => {
    return { title, description, listID }
}

const Task = (title, priority, dueDate, list, subtasks, note, completed, taskID) => {
    return { title, priority, dueDate, list, subtasks, note, completed, taskID }
}

const Subtask = (title, taskID) => {
    return { title, taskID }
}

const userLists = [
    {title: 'Test list 1', description: 'tester', listID: 1},
    {title: 'Test list 2', description: 'testee', listID: 2},
    {title: 'Test list 3', description: 'tested', listID: 3},
]

const navLists = [
    {title: 'All tasks'},
    {title: 'Today'},
    {title: 'This week'},
]

const userTasks = [
    {title: 'Test task', priority: '', dueDate: '', list: '', subtasks: '', note: '', completed: 'false', taskID: 1},
    {title: 'Test task', priority: '', dueDate: '', list: '', subtasks: '', note: '', completed: 'false', taskID: 2},
    {title: 'Test task', priority: '', dueDate: '', list: '', subtasks: '', note: '', completed: 'false', taskID: 3},
    {title: 'Test task', priority: '', dueDate: '', list: '', subtasks: '', note: '', completed: 'false', taskID: 4},
    {title: 'Test task', priority: 'low', dueDate: '2022-07-04T03:50', list: 'Test list 2', subtasks: [{title: 'Test subtask', taskID: 5, subtask: 1}], note: 'hello', completed: 'false', taskID: 5},
]

const userSubtask = [
    {title: 'Test subtask', taskID: '5', subtask: 1},
]

export { List, Task, Subtask, userLists, navLists, userTasks, userSubtask, }