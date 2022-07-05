import './style.css';
import {List, Task, Subtask, userLists, navLists, userTasks, userSubtask} from "./data.js";

const master = () => {
// x    initialize templates 
// x    render controls
// x    event listener controls
// x    reset event listeners
// refactor render list

    const initListClone = () => {
        if (content.contains(document.getElementById('taskCardContainer'))) {
            document.getElementById('taskCardContainer').remove();
        }

        const listCardTemplate = document.getElementById('listCard-template');
        const listCardClone = document.importNode(listCardTemplate.content, true);
        content.appendChild(listCardClone);

        const currentList = document.getElementById('currentList');
        const listDescription = document.getElementById('listDescription');
        const deleteList = document.getElementById('deleteList');
        const submitList = document.getElementById('submitList');

        currentList.focus();
        submitList.addEventListener('click', lists().handleForm);

        return { currentList, listDescription, deleteList, submitList }
    }

    const initCardClone = () => {
        if (content.contains(document.getElementById('taskCardContainer'))) {
            document.getElementById('taskCardContainer').remove();
        }

        const taskCardTemplate = document.getElementById('taskCard-template');
        const taskCardClone = document.importNode(taskCardTemplate.content, true);
        content.appendChild(taskCardClone);

        const taskCardContainer = document.getElementById('taskCardContainer');
        const currentList = document.getElementById('currentList');
        const listDescription = document.getElementById('listDescription');
        const submitQuickAdd = document.getElementById('submitQuickAdd');

        return { taskCardContainer, currentList, listDescription, submitQuickAdd, }
    }

    const initEditorClone = () => {
        if (content.contains(document.getElementById('editorCardContainer'))) return

        const editorCardTemplate = document.getElementById('editorCard-template');
        const editorClone = document.importNode(editorCardTemplate.content, true);
        content.prepend(editorClone);

        const editorForm = document.getElementById('editorForm');
        const currentTask = document.getElementById('currentTask');
        const priorities = document.querySelectorAll('[data-priority]');
        const dueDate = document.getElementById('dueDate');
        const listDropdown = document.getElementById('listDropdown');
        const createSubtaskButton = document.getElementById('createSubtaskButton');
        const notes = document.getElementById('notes');
        const submitTask = document.getElementById('submitTask');

        currentTask.focus();

        priorities.forEach(priority => {
            priority.addEventListener('click', (e) => {
                priorities.forEach(priority => {
                    if (priority.classList.contains('clicked')) {
                        priority.classList.remove('clicked');
                    }
                });

                priority.classList.add('clicked');
            });
        });

        createSubtaskButton.addEventListener('click', editor().handleSubtask);

        submitTask.addEventListener('click', () => {
            editor().handleForm();
            tasks().display(userTasks);
            content.removeChild(editorCardContainer);
        });

        return {editorForm, currentTask, priorities, dueDate, listDropdown, createSubtaskButton, notes, submitTask}
    }

    const renderList = (listArray, e) => {
        initCardClone();

        if (listArray.some( ({ title }) => 
        title === 'All tasks' || title === 'Today' || title === 'This week')) {
            currentList.value = e.target.dataset.navoption;
            currentList.setAttribute('readonly', 'readonly'); 
        
            taskCardContainer.removeChild(listDescription);

            tasks().display(userTasks); 
            submitQuickAdd.addEventListener('click', tasks().handleQuickAdd);
 
        } else {
            const elementID = parseInt(e.target.dataset.listId);
            const activeList = userLists.find( ({ listID }) => listID === elementID);

            currentList.value = activeList.title;
            currentList.dataset.listId = activeList.listID;
            currentList.addEventListener('focus', () => {
                setPlaceholder(currentList);
            }, { once: true });
            currentList.addEventListener('focusout', (e) => {
                lists().setTitle(e);
                lists().display(listArray);
            });
            
            if (activeList.description === '') {
                taskCardContainer.removeChild(listDescription);
            } else {
                listDescription.value = activeList.description;
                listDescription.dataset.listId = activeList.listID;
                listDescription.addEventListener('focus', () => {
                    setPlaceholder(listDescription);
                }, { once: true })
                listDescription.addEventListener('focusout', (e) => {
                    lists().setDescription(e);
                })
            }

            tasks().display(userTasks); 
            submitQuickAdd.addEventListener('click', tasks().handleQuickAdd);
        }
    }

    const setPlaceholder = (element) => {
        element.placeholder = element.value;
        element.value = '';
    }

    const createTaskButton = document.getElementById('createTaskButton');
    const addListButton = document.getElementById('addListButton');
    const navOptions = document.querySelectorAll('[data-navOption]');
    
    createTaskButton.addEventListener('click', initEditorClone);
    addListButton.addEventListener('click', initListClone);
    navOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            renderList(navLists, e);
        });
    }); 

    return { initEditorClone, renderList, setPlaceholder, }
}

const lists = () => {
// x    getters and setters
// x    lists display controls
// x    list form controls
// remove lists
// check for existing list with same name?? - logic in old index
// handleForm displays the new list onclick-submit

    const display = (listArray) => {
        const listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';

        listArray.forEach(list => {
            const listItem = document.createElement('button');
            listContainer.appendChild(listItem);
            listItem.classList.add('textButton');
            listItem.textContent = list.title;
            listItem.dataset.listId = list.listID;
            listItem.addEventListener('click', (e) => {
                master().renderList(listArray, e);
            });
        });
    }

    const handleForm = () => {    
        const newTitle = getTitle();
        const newDescription = getDescription();
        const newListID = userLists.length + 1;

        const newList = List(newTitle, newDescription, newListID);
        userLists.push(newList);
        display(userLists);
    }

    const getTitle = () => {
        const currentList = document.getElementById('currentList');
        return currentList.value;
    }

    const setTitle = (e) => {
        const title = getTitle();

        if (title === '') return

        const elementID = parseInt(e.target.dataset.listId);
        const activeList = userLists.find( ({ listID }) => listID === elementID);
       
        activeList.title = title;
    }

    const getDescription = () => {
        const listDescription = document.getElementById('listDescription');
        return listDescription.value;
    }

    const setDescription = (e) => {
        const description = getDescription();

        if (description === '') return

        const elementID = parseInt(e.target.dataset.listId);
        const activeList = userLists.find( ({ listID }) => listID === elementID);
       
        activeList.description = description;
    }

    return { display, handleForm, setTitle, setDescription, }
}

const tasks = () => {
// getters and setters
// x    task display controls
// x    handle quick add controls
// delete tasks

    const display = (taskArray) => {
        const taskContainer = document.getElementById('taskContainer');
        taskContainer.innerHTML = '';
    
        taskArray.forEach(task => {
            const taskTemplate = document.getElementById('task-template');
            const taskClone = document.importNode(taskTemplate.content, true);
            taskContainer.appendChild(taskClone);

            const tasks = Array.from(document.querySelectorAll('[data-task]'));
            const index = task.taskID - 1;

            tasks[index].textContent = task.title;
            tasks[index].dataset.task = task.taskID;

            tasks[index].addEventListener('click', (e) => {
                editor().display(e);
            });
        });
    }

    const handleQuickAdd = (e) => {
        e.preventDefault();
    
        const title = getTitle()
        const taskID = userTasks.length + 1;

        const newTask = Task(title, '', '', '', '', '', '', taskID);
        userTasks.push(newTask);

        quickAddTask.value = '';
    
        display(userTasks);
    }

    const getTitle = () => {
        const quickAddTask = document.getElementById('quickAddTask');
        return quickAddTask.value;
    }

    const setTitle = () => {
        const title = getTitle();

        if (title === '') return


    }

    return { display, handleQuickAdd }
}

const editor = () => {
// getters and setters for title/subtask
// form/task creation methods
//      get/set priority
//      get/set dueDate from input
//      get/set target list from input
//      create new subtask
//      get/set notes from input
//      submit task/push to array                              
// delete task
//
// Set task id to date-time@creation ??

    const display = (e) => {
        master().initEditorClone();

        const currentTask = document.getElementById('currentTask');
        currentTask.focus();
        
        currentTask.value = e.target.textContent;
        master().setPlaceholder(currentTask);

        const elementID = parseInt(e.target.dataset.task)
        const activeTask = userTasks.find( ({ taskID }) => taskID === elementID);

        const priority = activeTask.priority;
        if (priority === '') {
            return
        } else if (priority === 'critical') {
            document.querySelector('[data-priority="critical"]').classList.add('clicked');
        } else if (priority === 'important') {
            document.querySelector('[data-priority="important"]').classList.add('clicked');
        } else if (priority === 'low') {
            document.querySelector('[data-priority="low"]').classList.add('clicked');
        }
        
        const dueDate = activeTask.dueDate;
        const dueDateInput = document.getElementById('dueDate');
        dueDateInput.value = dueDate;

        const list = activeTask.list;
        const listInput = document.getElementById('listDropdown');
        listInput.value = list;

        const subtasks = activeTask.subtasks;
        const subtaskContainer = document.getElementById('subtaskContainer');

        subtasks.forEach(subtask => {
            const subtaskTemplate = document.getElementById('subtask-template');
            const subtaskClone = document.importNode(subtaskTemplate.content, true);
            subtaskContainer.appendChild(subtaskClone);

            const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
            const index = subtask.subtask - 1;

            subtasks[index].value = subtask.title;
        })

        const notes = document.getElementById('notes');
        notes.value = activeTask.note;
        
    }

    const getTitle = () => {
        const currentTask = document.getElementById('currentTask');
        return currentTask.value;
    }

    const setTitle = (e) => {
        const title = getTitle();

        if (title === '') return


    }

    const getPriority = () => {
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        const activePriority = priorities.find( ({ classList }) => classList.contains('clicked'))

        return activePriority.dataset.priority
    }

    const getDueDate = () => {
        const dueDate = document.getElementById('dueDate');
        return dueDate.value;
    }

    const getTargetList = () => {
        const listDropdown = document.getElementById('listDropdown');

        return listDropdown.value
    }

    const handleSubtask = () => {
        const subtaskContainer = document.getElementById('subtaskContainer');
        const subtaskTemplate = document.getElementById('subtask-template');
        const subtaskClone = document.importNode(subtaskTemplate.content, true);
        subtaskContainer.appendChild(subtaskClone);

        const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
        const index = userSubtask.length - 1;

        subtasks[index].focus();

        subtasks[index].addEventListener('focusout', () => {
            if (subtasks[index].value === '') return

            const newSubtask = Subtask(subtasks[index].value, userSubtask.length + 1);  // taskID should be set to the calling task
            userSubtask.push(newSubtask);
        });
    }

    const getNotes = () => {
        const notes = document.getElementById('notes');
        return notes.value
    }

    const handleForm = () => {
        const taskID = userTasks.length + 1;

        const newTask = Task(getTitle(), getPriority(), getDueDate(), getTargetList(), userSubtask, getNotes(), '', taskID)
        userTasks.push(newTask);
        console.log(userTasks);
    }
    return { display, handleForm, getPriority, handleSubtask, }
}

export { master, lists, tasks, editor, }