import { userTasks } from "./data"
import { editor } from "./editor"

const Task = (title, priority, dueDate, list, subtasks, notes, completed, taskID) => {

    return { title, priority, dueDate, list, subtasks, notes, completed, taskID }
}

const tasks = () => {
// x    getters and setters
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
                const clickedTask = getClickedTask(e);
                editor().displayTask(clickedTask);
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

    const getClickedTask = (e) => {
        const elementID = parseInt(e.target.dataset.task)
        const clickedTask = userTasks.find( ({ taskID }) => taskID === elementID);

        return clickedTask
    }

    return { display, handleQuickAdd }
}

export { Task, tasks }