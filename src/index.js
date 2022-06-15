const createTaskButton = document.getElementById('createTaskButton');

const navOptions = document.querySelectorAll('[data-nav]');

const listContainer = document.getElementById('listContainer');
const addListButton = document.getElementById('addListButton');

const content = document.getElementById('content');
const taskCardTemplate = document.getElementById('taskCard-template');
const editorCardTemplate = document.getElementById('editorCard-template');

const taskCard = document.getElementById('taskCard');
const taskTemplate = document.getElementById('task-template');
const taskContainer = document.getElementById('taskContainer');
const quickAddTask = document.getElementById('quickAddTask');
const submitQuickAdd = document.getElementById('submitQuickAdd');

const currentTask = document.getElementById('currentTask');
const priorityCritical = document.getElementById('priorityCritical');
const priorityImportant = document.getElementById('priorityImportant');
const priorityLow = document.getElementById('priorityLow');
const dueDate = document.getElementById('dueDate');
const listDropdown = document.getElementById('listDropdown');
const subtaskContainer = document.getElementById('subtaskContainer');
const createSubtaskButton = document.getElementById('createSubtaskButton');
const notes = document.getElementById('notes');
const deleteTask = document.getElementById('deleteTask');

const List = (title, description, listID) => {

    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle; 

    const getDescription = () => description;
    const setDescription = (newDescription) => description = newDescription;

    const getTasks = () => userTasks;
    const setTasks = () => null;

    const getListID = () => listID;

    return { title, description, listID, getTitle, setTitle, getDescription, setDescription, getTasks, setTasks, getListID, }
}

const Task = (title, priority, dueDate, list, subtasks, note) => {

    const getTitle = () => title;           // Get title from text input
    const setTitle = (newTitle) => title = newTitle;

    const getPriority = () => priority;     // Get value from button click
    const setPriority = (newPriority) => priority = newPriority;

    const getDueDate = () => dueDate;       // Get due date from date-time input
    const setDueDate = (newDueDate) => dueDate = newDueDate;

    const getList = () => list;             // Get list from dropdown selection
    const setList = (targetList) => list = targetList;

    const getSubtasks = () => [...subtasks];    // Get subtask array from subtask creation
    const setSubtasks = (newSubtask) => subtasks = subtasks.push(newSubtask);

    const getNote = () => note;           // Get note from textarea input
    const setNote = (newNote) => note = newNote;

    return { getTitle, getPriority, getDueDate, getList, getSubtasks, getNote,
             setTitle, setPriority, setDueDate, setList, setSubtasks, setNote, }
};

let userLists = [
    {title: 'Test list 1', description: 'tester', listID: '1'},
    {title: 'Test list 2', description: 'testee', listID: '2'},
    {title: 'Test list 3', description: 'tested', listID: '3'},
]

let userTasks = [
    {title: 'Test task'},
    {title: 'Test task'},
    {title: 'Test task'},
    {title: 'Test task'},
    {title: 'Test task'},
]

const renderAddTask = () => {
    if (content.contains(document.getElementById('editorCard'))) return
    const editorClone = document.importNode(editorCardTemplate.content, true);
    content.prepend(editorClone);

    const currentTask = document.getElementById('currentTask');
    currentTask.focus();
}

const renderAddList = () => {
    initTaskClone();

    currentList.placeholder = 'List title';
    listDescription.placeholder = 'Description';
    currentList.focus();

    currentList.addEventListener('change', handleAddList)
}

const handleAddList = () => {
    const title = currentList.value;
    const lastListID = parseInt(listContainer.lastChild.dataset.listId);
    const newListID = `${lastListID + 1}`;
    const newList = List(title, '', newListID);
    userLists.push(newList);
    displayUserList(userLists);
}

const renderNavList = (list) => {
    initTaskClone();

    currentList.placeholder = list.dataset.nav;
    taskCard.removeChild(listDescription);

    if (currentList.dataset.title = list.dataset.title) {
        currentList.setAttribute('readonly', 'readonly');
    }   

    displayTask(userTasks);
}

const renderUserList = (list) => {
    initTaskClone();
    
    const id = list.dataset.listId;
    console.log("id: " + id);
    const activeList = userLists.find( ({ listID }) => listID === id);
    console.log("active list: " + activeList);
    
    currentList.placeholder = activeList.title;
    listDescription.placeholder = activeList.description;

    displayTask(userTasks);
}

const initTaskClone = () => {
    taskCard.innerHTML = '';
    const taskCardClone = document.importNode(taskCardTemplate.content, true);
    taskCard.appendChild(taskCardClone);

    const currentList = document.getElementById('currentList');
    const listDescription = document.getElementById('listDescription');

    return { currentList, listDescription }
}

const displayUserList = (listArray) => {
    listContainer.innerHTML = '';
    let i = 1
    listArray.forEach(list => {
        const listItem = document.createElement('button');
        listContainer.appendChild(listItem);
        listItem.classList.add('textButton');
        listItem.textContent = list.title;
        listItem.dataset.listId = i;
        i++;
    });

    const lists = document.querySelectorAll('[data-list-id]');
    lists.forEach(list => {
        list.addEventListener('click', () => {
            renderUserList(list);
        });
    });
}
displayUserList(userLists);

const displayTask = (taskArray) => {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';
    let i = 1
    taskArray.forEach(list => {
        const label = document.createElement('label');
        label.textContent = list.title;
        label.classList.add('task')
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.classList.add('checkbox');
        input.dataset.task = i;
        i++;

        label.appendChild(input);
        taskContainer.appendChild(label);
    });
}
displayTask(userTasks);

createTaskButton.addEventListener('click', renderAddTask);
addListButton.addEventListener('click', renderAddList);
navOptions.forEach(option => {
    option.addEventListener('click', () => {
        renderNavList(option);
    });
});