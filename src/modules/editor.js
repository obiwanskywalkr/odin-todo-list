import { ui } from "./ui.js"
import { Task } from "./task"
import { userTasks, userSubtasks } from "./data"

const Subtask = (title, taskID) => {
    return { title, taskID }
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

    const displayTask = (task) => {
        ui().initEditorClone();
        
        setTitle(task);
        setPriority(task);
        setDueDate(task);
        setTargetList(task);
        displaySubtask(task);
        setNotes(task);

        ui().setPlaceholder(currentTask);
        currentTask.focus();
    }

    const handleForm = () => {
        const taskID = userTasks.length + 1;
        const newTask = Task(getTitle(), getPriority(), getDueDate(), getTargetList(), userSubtasks, getNotes(), '', taskID)
        
        userTasks.push(newTask);
    }

    const getTitle = () => {
        const currentTask = document.getElementById('currentTask');
        return currentTask.value;
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

    const handleSubtask = () => {
        const subtaskContainer = document.getElementById('subtaskContainer');
        const subtaskTemplate = document.getElementById('subtask-template');
        const subtaskClone = document.importNode(subtaskTemplate.content, true);
        subtaskContainer.appendChild(subtaskClone);

        const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
        const index = userSubtasks.length - 1;

        subtasks[index].focus();

        subtasks[index].addEventListener('focusout', () => {
            if (subtasks[index].value === '') return

            const newSubtask = Subtask(subtasks[index].value, userSubtasks.length + 1);  // taskID should be set to the calling task
            userSubtasks.push(newSubtask);
        });
    }

    const displaySubtask = (task) => {
        if (task.subtasks === '') return

        const subtaskContainer = document.getElementById('subtaskContainer');
        const subtasks = task.subtasks;

        subtasks.forEach(subtask => {
            const subtaskTemplate = document.getElementById('subtask-template');
            const subtaskClone = document.importNode(subtaskTemplate.content, true);
            subtaskContainer.appendChild(subtaskClone);

            const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
            const index = subtask.subtask - 1;

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

    return { displayTask, handleForm, getPriority, handleSubtask, }
}

export { Subtask, editor }