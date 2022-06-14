const createTaskButton = document.getElementById('createTaskButton');

const navOptions = document.querySelectorAll('[data-nav]');

const listContainer = document.getElementById('listContainer');
const addListButton = document.getElementById('addListButton');

const content = document.getElementById('content');
const taskCardTemplate = document.getElementById('taskCard-template');
const editorCardTemplate = document.getElementById('editorCard-template');

const taskCard = document.getElementById('taskCard');
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

    const getTasks = () => [tasks];
    const setTasks = () => null;

    const getListID = () => listID;

    return { getTitle, setTitle, getDescription, setDescription, getTasks, setTasks, getListID, }
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

    const getSubtasks = () => [...subtasks]    // Get subtask array from subtask creation
    const setSubtasks = (newSubtask) => subtasks = subtasks.push(newSubtask);

    const getNote = () => note;           // Get note from textarea input
    const setNote = (newNote) => note = newNote;

    return { getTitle, getPriority, getDueDate, getList, getSubtasks, getNote,
             setTitle, setPriority, setDueDate, setList, setSubtasks, setNote, }
};


// let taskArray = [
//     {title: 'Test task'},
//     {title: 'Test task'},
//     {title: 'Test task'},
// ]

const renderTaskEditor = () => {
    if (content.contains(document.getElementById('editorCard'))) return
    const editorClone = document.importNode(editorCardTemplate.content, true);
    content.appendChild(editorClone);
}

createTaskButton.addEventListener('click', renderTaskEditor)

const renderNavList = (list) => {
    taskCard.innerHTML = '';
    const taskClone = document.importNode(taskCardTemplate.content, true);
    taskCard.appendChild(taskClone);

    const currentList = document.getElementById('currentList');
    const listDescription = document.getElementById('listDescription')

    currentList.placeholder = list.dataset.nav;
    taskCard.removeChild(listDescription);

    if (currentList.dataset.title = list.dataset.title) {
        currentList.setAttribute('readonly', 'readonly');
    }   
}

navOptions.forEach(option => {
    option.addEventListener('click', () => {
        renderNavList(option);
    })
})

let userLists = [
    {title: 'Test list 1', description: 'tester', listID: '1'},
    {title: 'Test list 2', description: 'testee', listID: '2'},
    {title: 'Test list 3', description: 'tested', listID: '3'},
]

const displayUserList = (listArray) => {
    let i = 1
    listArray.forEach(list => {
        let listItem = document.createElement('button');
        listContainer.appendChild(listItem);
        listItem.classList.add('textButton')
        listItem.textContent = list.title;
        listItem.dataset.list = i;
        i++
    })
    const lists = document.querySelectorAll('[data-list]');
    lists.forEach(list => {
        list.addEventListener('click', () => {
            renderUserList(list)
        })
    })
}
displayUserList(userLists);


const renderUserList = (list) => {
    taskCard.innerHTML = '';
    const taskClone = document.importNode(taskCardTemplate.content, true);
    taskCard.appendChild(taskClone);

    const currentList = document.getElementById('currentList');
    const listDescription = document.getElementById('listDescription')
    
    const id = list.dataset.list;

    const temp = userLists.find( ({ listID }) => listID === id);
    
    currentList.placeholder = temp.title;
    listDescription.placeholder = temp.description;
}