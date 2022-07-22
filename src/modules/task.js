import { ui } from './ui'
import { lists } from './list'
import { editor } from './editor'
import { allTasks, updateLocalStorage } from './data'
import { parseISO, isBefore, endOfToday, endOfWeek } from 'date-fns'

const Task = (title, priority, dueDate, list, subtasks, notes, completed, taskID) => {
    return { title, priority, dueDate, list, subtasks, notes, completed, taskID, }
}

const tasks = () => {
    const display = (taskArray) => {
        const taskContainer = document.getElementById('taskContainer');
        taskContainer.innerHTML = '';

        taskArray.forEach(task => {
            const taskTemplate = document.getElementById('task-template');
            const taskClone = document.importNode(taskTemplate.content, true);
            taskContainer.appendChild(taskClone);

            const tasks = Array.from(document.querySelectorAll('[data-task]'));
            const checkboxes = Array.from(document.querySelectorAll('[data-complete'));
            const index = taskArray.indexOf(task);

            tasks[index].textContent = task.title;
            tasks[index].dataset.task = task.taskID;
        
            if (task.completed === true) {
                tasks[index].classList.add('completed');
                checkboxes[index].checked = true;
            }

            tasks[index].addEventListener('click', () => {
                editor().displayTask(task);
            });

            checkboxes[index].addEventListener('click', () => {
                handleCompleted(task, tasks[index]);
            });
        });
    }

    const handleQuickAdd = (list) => {
        const title = getTitle();
        let taskID;
    
        if (list.length === undefined) {
            taskID = list.tasks.length + 1;
        } else {
            taskID = list.length + 1;
        }

        let newTask;
        if (lists().getActiveList() === undefined) {
            newTask = Task(title, '', '', '', [], '', '', taskID);
        } else {
            const targetList = lists().getActiveList().title;
            newTask = Task(title, '', '', targetList, [], '', '', taskID);
        }
              
        if (list.tasks === undefined) {
            allTasks.push(newTask);
            quickAddTask.value = '';
            ui().renderNavOption('All tasks');
            display(list);
        } else {
            list.tasks.push(newTask);
            allTasks.push(newTask);
            quickAddTask.value = '';
            display(list.tasks);
        }

        updateLocalStorage()
    }

    const handleDelete = (taskArray, task) => {
        const arrayIndex = taskArray.indexOf(task);
        const taskInAllTasks = allTasks.find( ({ title }) => title === task.title);
        const allTasksIndex = allTasks.indexOf(taskInAllTasks);

        taskArray.splice(arrayIndex, 1);
        allTasks.splice(allTasksIndex, 1);

        updateLocalStorage();
    }

    const handleCompleted = (task, taskElement) => {
        if (task.completed === true) {
            task.completed = false;
            taskElement.classList.remove('completed');
        } else {
            task.completed = true;
            taskElement.classList.add('completed');
        }

        updateLocalStorage();
    }

    const getTitle = () => {
        const quickAddTask = document.getElementById('quickAddTask');
        
        return quickAddTask.value;
    }

    const getActiveTask = (taskArray) => {
        const taskTitle = document.getElementById('currentTask').placeholder;
        const activeTask = taskArray.find( ({title}) => title === taskTitle);

        return activeTask
    }

    const getAllTasks = (listArray) => {
        listArray.forEach(list => {
            const iterator = list.tasks.values();
            for (const task of iterator) {
                allTasks.push(task);
            }
        });
    }

    const getTodayTasks = (taskArray) => {
        let todayTasks = [];

        for (let i = 0; i < taskArray.length; i++) {
            const endOfDay = endOfToday();
            const dueDate = parseISO(taskArray[i].dueDate);
            if (isBefore(dueDate, endOfDay)) {
                todayTasks.push(taskArray[i]);
            }
        }

        return todayTasks
    }

    const getWeekTasks = (taskArray) => {
        const today = new Date();
        let weekTasks = [];

        for (let i = 0; i < taskArray.length; i++) {
            const endOfThisWeek = endOfWeek(today);
            const dueDate = parseISO(taskArray[i].dueDate);
            if (isBefore(dueDate, endOfThisWeek)) {
                weekTasks.push(taskArray[i]);
            }
        }
    
        return weekTasks
    }

    const resetIDs = (taskArray) => {
        if (taskArray.tasks === undefined) {
            let i = 1;
            taskArray.forEach(task => {
                task.taskID = i;
                i++;
            });
        } else {
            let i = 1;
            taskArray.tasks.forEach(task => {
                task.taskID = i;
                i++;
            });
        }
    }

    return { display, handleQuickAdd, handleDelete, getActiveTask, getAllTasks, getTodayTasks, getWeekTasks, resetIDs }
}

export { Task, tasks }