import { ui } from "./ui"
import { lists } from "./list"
import { Task, tasks } from "./task"
import { userLists, allTasks, updateLocalStorage } from "./data"

const Subtask = (title, completed, taskID) => {
    return { title, completed, taskID }
}

const editor = () => {
    const displayTask = (task) => {
        ui().initEditorClone();

        if (editorCardContainer.contains(document.getElementById('submitTask'))) {
            displayUpdate(task);
            displayDelete(task);
        }
        
        setTitle(task);
        setPriority(task);
        setDueDate(task);
        setTargetList(task);
        displaySubtask(task);
        setNotes(task);

        ui().setPlaceholder(currentTask);
        currentTask.blur();
    }

    const displayUpdate = (task) => {
        const buttonContainer = editorCardContainer.querySelector('.buttonContainer');
        buttonContainer.removeChild(submitTask);

        const updateTask = document.createElement('button');
        updateTask.id = 'updateTask';
        updateTask.classList.add('textButton', 'submit');
        updateTask.textContent = 'Update Task';
        buttonContainer.append(updateTask);
        
        updateTask.addEventListener('click', () => {
            handleUpdate(task);
            document.getElementById('editorCardContainer').remove();
        });
    }

    const displayDelete = (task) => {
        const buttonContainer = editorCardContainer.querySelector('.buttonContainer');
        buttonContainer.removeChild(cancelEditor);

        const deleteTask = document.createElement('button');
        deleteTask.id = 'deleteTask';
        deleteTask.classList.add('textButton', 'delete');
        deleteTask.textContent = 'Delete Task';
        buttonContainer.prepend(deleteTask);

        deleteTask.addEventListener('click', () => {
            handleDelete(task);
        });
    }

    const handleForm = () => {
        const targetList = getTargetList();
        let newTask;

        if (targetList === 'All tasks') {
            const taskID = allTasks.length + 1;
            newTask = Task(getTitle(), getPriority(), getDueDate(), getTargetList(), getSubtasks(), getNotes(), false, taskID);
            
            allTasks.push(newTask);
            ui().renderNavOption('All tasks');
            tasks().display(allTasks);
        } else {
            const taskID = allTasks.length + 1;
            newTask = Task(getTitle(), getPriority(), getDueDate(), getTargetList(), getSubtasks(), getNotes(), false, taskID);
            
            const taskDestination = userLists.find( ({title}) => title === targetList);
            taskDestination.tasks.push(newTask);
            allTasks.push(newTask);
            ui().renderUserList(taskDestination);
        }

        updateLocalStorage();

        return newTask
    }

    const handleUpdate = (task) => {
        const title = getTitle();
        task.title = title;

        const priority = getPriority();
        task.priority = priority;

        const dueDate = getDueDate();
        task.dueDate = dueDate;

        const list = getTargetList();
        task.list = list;

        const notes = getNotes();
        task.notes = notes;

        tasks().display(allTasks);

        updateLocalStorage();
    }

    const handleDelete = (task) => {
        if (document.getElementById('listTitle').value === 'All tasks') {
            if (task.list === 'All tasks') {
                tasks().handleDelete(allTasks, task);
            } else {
                const activeList = userLists.find( ({ title }) => title === task.list);
                tasks().handleDelete(activeList.tasks, task);
            }
            tasks().resetIDs(allTasks);
            tasks().display(allTasks);
        } else {
            const activeList = lists().getActiveList();
            tasks().handleDelete(activeList.tasks, task);
            tasks().resetIDs(activeList);
            tasks().resetIDs(allTasks);
            tasks().display(activeList.tasks);
        }

        content.removeChild(editorCardContainer);
        updateLocalStorage();
    }

    const getTitle = () => {
        const currentTask = document.getElementById('currentTask');
        if (currentTask.value === '') {
            return currentTask.placeholder;
        } else {
            return currentTask.value;
        }
    }

    const setTitle = (task) => {
        if (task.title === '') return

        const currentTask = document.getElementById('currentTask');
        currentTask.value = task.title;
    }

    const getPriority = () => {
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        const activePriority = priorities.find( ({ classList }) => classList.contains('clicked'));

        if (activePriority === undefined) return

        return activePriority.dataset.priority
    }

    const setPriority = (task) => {
        if (task.priority === '') return
        
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        priorities.forEach(priority => {
            priority.classList.remove('clicked');
        });

        const priority = task.priority;
        if (priority === '') {
            return
        } else if (priority === 'critical') {
            document.querySelector('[data-priority="critical"]').classList.add('clicked');
        } else if (priority === 'important') {
            document.querySelector('[data-priority="important"]').classList.add('clicked');
        } else if (priority === 'low') {
            document.querySelector('[data-priority="low"]').classList.add('clicked');
        }
    }

    const getDueDate = () => {
        const dueDate = document.getElementById('dueDate');
        return dueDate.value;
    }

    const setDueDate = (task) => {
        if (task.dueDate === '') return

        const dueDate = document.getElementById('dueDate');
        dueDate.value = task.dueDate;
    }

    const getTargetList = () => {
        const listDropdown = document.getElementById('listDropdown');
        return listDropdown.value
    }

    const setTargetList = (task) => {
        if (task.list === '') return

        const listDropdown = document.getElementById('listDropdown');
        listDropdown.value = task.list;
    }

    const handleSubtask = (task) => {
        const subtaskContainer = document.getElementById('subtaskContainer');
        const subtaskTemplate = document.getElementById('subtask-template');
        const subtaskClone = document.importNode(subtaskTemplate.content, true);
        subtaskContainer.appendChild(subtaskClone);

        const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
        let index;

        if (task === undefined) {
            index = 0;
        } else {
            index = task.subtasks.length;
        }

        // subtasks[index].focus();

        // subtasks[index].addEventListener('focusout', () => {
        //     if (subtasks[index].value === '') return

        //     const newSubtask = Subtask(subtasks[index].value, false, index + 1);
        //     task.subtasks.push(newSubtask);
        // });
    }

    const displaySubtask = (task) => {
        if (task.subtasks === '') return

        const subtaskContainer = document.getElementById('subtaskContainer');
        const currentSubtasks = task.subtasks;

        subtaskContainer.innerHTML = '';
        currentSubtasks.forEach(subtask => {
            const subtaskTemplate = document.getElementById('subtask-template');
            const subtaskClone = document.importNode(subtaskTemplate.content, true);
            subtaskContainer.appendChild(subtaskClone);

            const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
            const checks = Array.from(document.querySelectorAll('[data-check'));
            const index = currentSubtasks.indexOf(subtask);

            if (subtask.completed === true) {
                checks[index].checked = true;
            }

            subtasks[index].value = subtask.title;

            checks[index].addEventListener('click', () => {
                handleCompleted(subtask);
            });
        });
    }

    const getSubtasks = () => {
        const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
        const subtaskArray = [];
        const index = 0

        subtasks.forEach(subtask => {
            const newSubtask = Subtask(subtask.value, false, index + 1)
            subtaskArray.push(newSubtask);
        });

        return subtaskArray;
    }

    const handleCompleted = (subtask) => {
        if (subtask.completed === true) {
            subtask.completed = false;
        } else {
            subtask.completed = true;
        }

        updateLocalStorage();
    }

    const getNotes = () => {
        const notes = document.getElementById('notes');
        return notes.value
    }

    const setNotes = (task) => {
        if (task.notes === '') return

        const notes = document.getElementById('notes');
        notes.value = task.notes;
    }

    const initListDropdown = (listArray) => {
        listDropdown.innerHTML = '';

        const option = document.createElement('option');
        option.value = 'All tasks';
        option.textContent = 'All tasks';
        listDropdown.appendChild(option);

        listArray.forEach(list => {
            const option = document.createElement('option');
            option.value = list.title;
            option.textContent = list.title;
            listDropdown.appendChild(option);
        });
    }

    return { displayTask, handleForm, getTargetList, handleSubtask, initListDropdown }
}

export { Subtask, editor }