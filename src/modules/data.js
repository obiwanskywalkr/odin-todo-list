const userLists = [
    {title: 'Test list', 
    description: 'foobar', 
    tasks: [{title: 'Task', priority: 'critical', dueDate: '2022-10-22T16:20', list: 'Test list', subtasks: [{title: 'foo', completed: true, subtask: 1}], notes: 'bar', completed: false, taskID: 1}], 
    listID: 1}
]

const allTasks = [];

function updateLocalStorage() {
    localStorage.clear();

    const userList_string = JSON.stringify(userLists);

    localStorage.setItem("userLists", userList_string);

    console.log(localStorage);
}


const userList_parsed = JSON.parse(localStorage.getItem("userLists"));

export { userLists, allTasks, updateLocalStorage }


// {title: 'List 2', 
// description: 'foobar!', 
// tasks: [{title: 'Important task', priority: 'important', dueDate: '2022-10-22T16:20', list: 'List 2', subtasks: [{title: 'foo!', completed: false, subtask: 1}], notes: 'bar!', completed: false, taskID: 2}], 
// listID: 2},

// {title: 'List 3', 
// description: 'foobar?', 
// tasks: [{title: 'Regular task', priority: 'low', dueDate: '2022-10-22T16:20', list: 'List 3', subtasks: [{title: 'foo?', completed: false, subtask: 1}], notes: 'bar?', completed: false, taskID: 3}], 
// listID: 3},