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

const List = (title, description, listID) => {

    // const getTitle = () => title;
    // const setTitle = (newTitle) => title = newTitle; 

    // const getDescription = () => description;
    // const setDescription = (newDescription) => description = newDescription;

    // const getTasks = () => userTasks;
    // const setTasks = () => null;

    // const getListID = () => listID;

    return { title, description, listID, /*getTitle, setTitle, getDescription, setDescription, getTasks, setTasks, getListID,*/ }
}

const Task = (title, priority, dueDate, list, [subtasks], note, completed, taskID) => {

    // const getTitle = () => title;           // Get title from text input
    // const setTitle = (newTitle) => title = newTitle;

    // const getPriority = () => priority;     // Get value from button click
    // const setPriority = (newPriority) => priority = newPriority;

    // const getDueDate = () => dueDate;       // Get due date from date-time input
    // const setDueDate = (newDueDate) => dueDate = newDueDate;

    // const getList = () => list;             // Get list from dropdown selection
    // const setList = (targetList) => list = targetList;

    // const getSubtasks = () => [...subtasks];    // Get subtask array from subtask creation
    // const setSubtasks = (newSubtask) => subtasks = subtasks.push(newSubtask);

    // const getNote = () => note;           // Get note from textarea input
    // const setNote = (newNote) => note = newNote;

    return { title, priority, dueDate, list, subtasks, note, /*getTitle, getPriority, getDueDate, getList, getSubtasks, getNote,
setTitle, setPriority, setDueDate, setList, setSubtasks, setNote,*/ }
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

const displayCreateTask = () => {
    if (content.contains(document.getElementById('editorCard'))) return
    const editorClone = document.importNode(editorCardTemplate.content, true);
    content.prepend(editorClone);

    handleCreateTask();
}

const handleCreateTask = () => {
    const editorForm = document.getElementById('editorForm');
    const currentTask = document.getElementById('currentTask');
    const priorities = document.querySelectorAll('[data-value]');
    const dueDate = document.getElementById('dueDate');
    const listDropdown = document.getElementById('listDropdown');
    const subtaskContainer = document.getElementById('subtaskContainer');
    const createSubtaskButton = document.getElementById('createSubtaskButton');
    const notes = document.getElementById('notes');
    const submitTask = document.getElementById('submitTask');

    console.log(priorities);

    currentTask.focus();

    priorities.forEach(priority => {
        priority.addEventListener('click', (e) => {
            e.target.classList.add('clicked');
            const taskPriority = e.target.dataset.value;
            return taskPriority;
        })
    })
    submitTask.addEventListener('click', () => {
        const taskPriority = 'critical';
        if (currentTask.value === '') {
            content.removeChild(editorCard);
            return
        }
        const newTask = Task(currentTask.value, taskPriority, dueDate.value,
            listDropdown.value, undefined, notes.value);
            userTasks.push(newTask);
            editorForm.reset();
            displayTask(userTasks);
            content.removeChild(editorCard);
    })
}

const displayAddList = () => {
    initTaskClone();

    currentList.placeholder = 'List title';
    listDescription.placeholder = 'Description';
    currentList.focus();

    taskCard.addEventListener('change', handleAddList)
}

const handleAddList = (e) => {
    if (e.target.id === 'quickAddTask' || e.target.id === 'submitQuickAdd') return

    const newTitle = currentList.value;
    const newDescription = listDescription.value;
    const lastListID = parseInt(listContainer.lastChild.dataset.listId);
    const newListID = `${lastListID + 1}`;

    const temp = userLists.find( ({ title }) => title === newTitle);

    if (temp === undefined) {
        const newList = List(newTitle, newDescription, newListID);
        userLists.push(newList);
        displayUserList(userLists);
    } else {
        const newList = userLists.find( ({ listID }) => listID === `${lastListID}`);
        newList.description = newDescription;
        displayUserList(userLists);
    }

}

const renderNavList = (list) => {
    initTaskClone();

    currentList.value = list.dataset.nav;
    currentList.setAttribute('readonly', 'readonly'); 

    taskCard.removeChild(listDescription);

    displayTask(userTasks);
}

const renderUserList = (list) => {
    initTaskClone();
    
    const id = list.dataset.listId;
    const activeList = userLists.find( ({ listID }) => listID === id);
    
    currentList.value = activeList.title;
    listDescription.value = activeList.description;

    currentList.addEventListener('focus', () => {
        currentList.placeholder = currentList.value;
        currentList.value = '';
    })

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

const handleQuickAdd = (() => {
    const quickAddTask = document.getElementById('quickAddTask');
    const submitQuickAdd = document.getElementById('submitQuickAdd');

    submitQuickAdd.addEventListener('click', (e) => {
        e.preventDefault();
        const title = quickAddTask.value;
        const newTask = Task(title);
        userTasks.push(newTask);
        quickAddTask.value = '';
        displayTask(userTasks);
    });
})();

createTaskButton.addEventListener('click', displayCreateTask);
addListButton.addEventListener('click', displayAddList);
navOptions.forEach(option => {
    option.addEventListener('click', () => {
        renderNavList(option);
    });
});