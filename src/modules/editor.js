import { ui } from "./ui.js"
import { Task, tasks } from "./task"
import { navLists, userLists } from "./data"

const Subtask = (title, taskID) => {
    return { title, taskID }
}

const editor = () => {
// list dropdown options need dynamic creation
// handleSubtask needs refactored with target task parameter

    const displayTask = (task) => {
        ui().initEditorClone();

        if (editorCardContainer.contains(document.getElementById('submitTask'))) {
            displayUpdate(task);
            displayDelete();
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
        });
    }

    const displayDelete = () => {
        const buttonContainer = editorCardContainer.querySelector('.buttonContainer');
        buttonContainer.removeChild(cancelEditor);

        const deleteTask = document.createElement('button');
        deleteTask.id = 'deleteTask';
        deleteTask.classList.add('textButton', 'delete');
        deleteTask.textContent = 'Delete Task';
        buttonContainer.prepend(deleteTask);

        deleteTask.addEventListener('click', (e) => {
            const activeTask = tasks().getActiveTask(navLists[0].tasks, e)
            tasks().remove(navLists[0].tasks, activeTask);
            tasks().display(navLists[0].tasks);
            content.removeChild(editorCardContainer);
        });
    }

    const handleForm = () => {
        const targetList = getTargetList();
        let taskDestination;
        (targetList === 'All tasks') ?
            taskDestination = navLists.find( ({title}) => title = targetList) :
            taskDestination = userLists.find( ({title}) => title === targetList)
        
        const taskID = navLists[0].tasks.length + 1;
        const newTask = Task(getTitle(), getPriority(), getDueDate(), getTargetList(), '', getNotes(), '', taskID)
        
        taskDestination.tasks.push(newTask);
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

        tasks().display(navLists[0].tasks);
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
        const activePriority = priorities.find( ({ classList }) => classList.contains('clicked'))

        if (activePriority === undefined) return

        return activePriority.dataset.priority
    }

    const setPriority = (task) => {
        if (task.priority === '') return
        
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        priorities.forEach(priority => {
            priority.classList.remove('clicked');
        })

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
        const index = task.subtasks.length;

        subtasks[index].focus();

        subtasks[index].addEventListener('focusout', () => {
            if (subtasks[index].value === '') return

            const newSubtask = Subtask(subtasks[index].value, task.subtasks.length + 1);
            task.subtasks.push(newSubtask);
        });
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
            const index = currentSubtasks.indexOf(subtask);

            subtasks[index].value = subtask.title;
        })
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
        })
    }

    return { displayTask, handleForm, getTargetList, handleSubtask, initListDropdown }
}

export { Subtask, editor }