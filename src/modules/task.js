import { editor } from "./editor"

const Task = (title, priority, dueDate, list, subtasks, notes, completed, taskID) => {

    return { title, priority, dueDate, list, subtasks, notes, completed, taskID, }
}

const tasks = () => {
// handleQuickAdd needs refactored with task/list array parameter
// Add mark as complete functionality

    const display = (taskArray) => {
        const taskContainer = document.getElementById('taskContainer');
        taskContainer.innerHTML = '';
    
        taskArray.forEach(task => {
            const taskTemplate = document.getElementById('task-template');
            const taskClone = document.importNode(taskTemplate.content, true);
            taskContainer.appendChild(taskClone);

            const tasks = Array.from(document.querySelectorAll('[data-task]'));
            const index = taskArray.indexOf(task);

            tasks[index].textContent = task.title;
            tasks[index].dataset.task = task.taskID;

            tasks[index].addEventListener('click', (e) => {
                const activeTask = getActiveTask(taskArray, e);
                editor().displayTask(activeTask);
            });
        });
    }

    const handleQuickAdd = (listArray, e) => {
        e.preventDefault();
    
        const title = getTitle()
        let taskID;

        if (listArray.length === undefined) {
            taskID = listArray.tasks.length + 1;
        } else {
            taskID = listArray.length + 1;
        }

        const newTask = Task(title, '', '', '', [], '', '', taskID);
        
        if (listArray.tasks === undefined) {
            listArray.push(newTask);
            quickAddTask.value = '';
    
            display(listArray);
        } else {
            listArray.tasks.push(newTask);
            
            quickAddTask.value = '';
    
            display(listArray.tasks);
        }
    }

    const remove = (taskArray, task) => {
        const index = taskArray.indexOf(task);
        taskArray.splice(index, 1);
        resetIDs(taskArray);
        display(taskArray);
    }

    const getTitle = () => {
        const quickAddTask = document.getElementById('quickAddTask');
        return quickAddTask.value;
    }

    const getActiveTask = (taskArray, e) => {
        if (e.target.id === 'createSubtaskButton') {
            const currentTaskText = e.target.parentNode.parentNode.firstChild.nextElementSibling.placeholder;
            const activeTask = taskArray.find( ({title}) => title === currentTaskText);

            return activeTask
        } else if (e.target.id === 'deleteTask') {
            const currentTaskText = e.target.parentNode.previousElementSibling.firstChild.nextElementSibling.placeholder;
            const activeTask = taskArray.find( ({title}) => title === currentTaskText);
           
            return activeTask
        } else {
            const elementID = parseInt(e.target.dataset.task);
            const activeTask = taskArray.find( ({ taskID }) => taskID === elementID);
    
            return activeTask
        }
    }

    const resetIDs = (taskArray) => {
        let i = 1;
        taskArray.forEach(task => {
            task.taskID = i;
            i++
        })
    }

    return { display, handleQuickAdd, remove, getActiveTask, }
}

export { Task, tasks }