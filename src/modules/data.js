let userLists;

if (getLocalStorage() === undefined) {
    userLists = [
        {title: 'Test list', 
        description: 'foobar', 
        tasks: [{title: 'Test task', priority: 'critical', dueDate: '2022-10-22T16:20', list: 'Test list', subtasks: [{title: 'foo', completed: true, subtask: 1}], notes: 'bar', completed: false, taskID: 1}], 
        listID: 1}
    ]

} else {
    userLists = getLocalStorage();
}

const allTasks = [];

function updateLocalStorage() {
    localStorage.clear();

    const userList_string = JSON.stringify(userLists);

    localStorage.setItem("userLists", userList_string);
}

function getLocalStorage() {
    if (localStorage.getItem('userLists') === null) return

    const userList_parsed = JSON.parse(localStorage.getItem('userLists'));

    return userList_parsed;
}

export { userLists, allTasks, updateLocalStorage, getLocalStorage }