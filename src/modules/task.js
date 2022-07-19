import { editor } from "./editor"
import { allTasks } from "./data"
import { parseISO, isBefore, endOfToday, endOfWeek } from 'date-fns'

const Task = (title, priority, dueDate, list, subtasks, notes, completed, taskID) => {

    return { title, priority, dueDate, list, subtasks, notes, completed, taskID, }
}

const tasks = () => {
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

            tasks[index].addEventListener('click', () => {
                editor().displayTask(task);
            });
        });
    }

    const handleQuickAdd = (list) => {
        const title = getTitle()
        let taskID;

        if (list.length === undefined) {
            taskID = list.tasks.length + 1;
        } else {
            taskID = list.length + 1;
        }

        const newTask = Task(title, '', '', '', [], '', '', taskID);
        
        // Added to check if list argument is allTasks or userList       
        if (list.tasks === undefined) {
            allTasks.push(newTask);
            quickAddTask.value = '';
            display(list);
        } else {
            list.tasks.push(newTask);
            allTasks.push(newTask);
            quickAddTask.value = '';
            display(list.tasks);
        }
    }

    const handleDelete = (taskArray, task) => {
        const index = taskArray.indexOf(task);
        taskArray.splice(index, 1);
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
        // Change task due date in userList if not working

        let todayTasks = [];
        for (let i = 0; i < taskArray.length; i++) {
            const endOfDay = endOfToday();
            const dueDate = parseISO(taskArray[i].dueDate);
            if (isBefore(dueDate, endOfDay)) {
                todayTasks.push(taskArray[i]);
            }
        }
        
        return todayTasks

        // taskArray.forEach(task => {
        //     const endOfDay = endOfToday();
        //     const dueDate = parseISO(task.dueDate);
        //     console.log(dueDate, endOfDay);
        //     let temp = taskArray.filter(function() {
        //         return isBefore(dueDate, endOfDay);
        //     });
        //     console.log(temp);   
        // });
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
                i++
            });
        } else {
            let i = 1;
            taskArray.tasks.forEach(task => {
                task.taskID = i;
                i++
            });
        }   

     
    }

    return { display, handleQuickAdd, handleDelete, getActiveTask, getAllTasks, getTodayTasks, getWeekTasks, resetIDs }
}

export { Task, tasks }