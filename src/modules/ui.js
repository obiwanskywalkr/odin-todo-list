import '/src/style.css'
import taskCatIcon from '/src/img/icon-cat.png'
import githubIcon from '/src/img/github-icon.png'
import menu from '/src/img/menu.png'
import { lists } from './list'
import { tasks } from './task'
import { editor } from './editor'
import { userLists, allTasks } from './data'

const ui = () => {
    const initListClone = () => {
        if (content.contains(document.getElementById('listCardContainer'))) {
            document.getElementById('listCardContainer').remove();
        }

        if (content.contains(document.getElementById('todoCardContainer'))) {
            document.getElementById('todoCardContainer').remove();
        }

        const listCardTemplate = document.getElementById('listCard-template');
        const listCardClone = document.importNode(listCardTemplate.content, true);
        content.appendChild(listCardClone);

        const listTitle = document.getElementById('listTitle');
        const listDescription = document.getElementById('listDescription');

        listTitle.focus();
        addListListeners();

        return { listTitle, listDescription }
    }

    const addListListeners = () => {
        const cancelList = document.getElementById('cancelList');
        const submitList = document.getElementById('submitList');

        cancelList.addEventListener('click', () => {
            initTodoClone();
            renderNavOption('All tasks')
        });
        
        submitList.addEventListener('click', () => {
            const newList = lists().handleForm(userLists);
            lists().display(userLists);
            renderUserList(newList);
        });
    }

    const initTodoClone = () => {
        if (content.contains(document.getElementById('todoCardContainer'))) {
            document.getElementById('todoCardContainer').remove();
        }

        if (content.contains(document.getElementById('listCardContainer'))) {
            document.getElementById('listCardContainer').remove();
        }

        const todoCardTemplate = document.getElementById('todoCard-template');
        const todoCardClone = document.importNode(todoCardTemplate.content, true);
        content.appendChild(todoCardClone);

        const todoCardContainer = document.getElementById('todoCardContainer');
        const listTitle = document.getElementById('listTitle');
        const listDescription = document.getElementById('listDescription');
        const submitQuickAdd = document.getElementById('submitQuickAdd');

        createMenu();

        return { todoCardContainer, listTitle, listDescription, submitQuickAdd }
    }

    const addTitleListeners = () => {
        listTitle.addEventListener('focus', () => {
            setPlaceholder(listTitle);
        }, { once: true });

        listTitle.addEventListener('focusout', () => {
            const activeList = lists().getActiveList();
            lists().updateTitle(activeList);
            lists().display(userLists);
        });
    }

    const addDescriptionListeners = () => {
        listDescription.addEventListener('focus', () => {
            setPlaceholder(listDescription);
        }, { once: true });

        listDescription.addEventListener('focusout', () => {
            const activeList = lists().getActiveList();
            lists().updateDescription(activeList);
        });
    }

    const initEditorClone = () => {
        if (content.contains(document.getElementById('editorCardContainer'))) {
            document.getElementById('editorCardContainer').remove();
        }

        const editorCardTemplate = document.getElementById('editorCard-template');
        const editorClone = document.importNode(editorCardTemplate.content, true);
        content.prepend(editorClone);

        const editorForm = document.getElementById('editorForm');
        const currentTask = document.getElementById('currentTask');
        const dueDate = document.getElementById('dueDate');
        const listDropdown = document.getElementById('listDropdown');
        const subtaskContainer = document.getElementById('subtaskContainer');
        const notes = document.getElementById('notes');

        editor().initListDropdown(userLists);
        addEditorListeners();
        currentTask.focus();
        
        return { editorForm, currentTask, dueDate, listDropdown, subtaskContainer, notes }
    }

    const addEditorListeners = () => {
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        const createSubtaskButton = document.getElementById('createSubtaskButton');
        const submitTask = document.getElementById('submitTask');
        const cancelEditor = document.getElementById('cancelEditor');

        priorities.forEach(priority => {
            priority.addEventListener('click', (e) => {
                removeClickedClass();
                e.target.classList.add('clicked');
            });
        });

        createSubtaskButton.addEventListener('click', (e) => {
            const activeTask = tasks().getActiveTask(allTasks, e);
            editor().handleSubtask(activeTask);
        });

        submitTask.addEventListener('click', () => {
            editor().handleForm();
            content.removeChild(editorCardContainer);
        });

        cancelEditor.addEventListener('click', (e) => {
            content.removeChild(editorCardContainer);
        });
    }

    const renderNavOption = (title) => {
        initTodoClone();

        listTitle.value = title;
        listTitle.setAttribute('readonly', 'readonly'); 
    
        todoCardContainer.removeChild(listDescription);

        submitQuickAdd.addEventListener('click', () => {
            tasks().handleQuickAdd(allTasks);
        });
    }

    const renderUserList = (list) => {
        initTodoClone();

        listTitle.value = list.title;
        listTitle.dataset.list = list.listID;
        addTitleListeners();
        
        if (list.description === '') {
            todoCardContainer.removeChild(listDescription);
        } else {
            listDescription.value = list.description;
            addDescriptionListeners();
        }

        if (list.tasks === '') { 
            submitQuickAdd.addEventListener('click', () => {
                tasks().handleQuickAdd(list);
            });
        } else {
            tasks().display(list.tasks); 

            submitQuickAdd.addEventListener('click', () => {
                tasks().handleQuickAdd(list);
            });
        }
    }

    const renderMessage = (message) => {
        const taskContainer = document.getElementById('taskContainer');
        taskContainer.innerHTML = '';

        const div = document.createElement('div');
        div.textContent = message;
        div.classList.add('message');
        taskContainer.appendChild(div);
    }

    const initPage = () => {
        const taskCatIconContainer = document.getElementById('taskCatIconContainer');
        const taskCatImage = new Image(60, 60);
        taskCatImage.src = taskCatIcon;
        taskCatIconContainer.appendChild(taskCatImage);

        const githubIconContainer = document.getElementById('githubIconContainer');
        const githubImage = new Image(25, 25);
        githubImage.src = githubIcon;
        githubIconContainer.appendChild(githubImage);

        tasks().getAllTasks(userLists);
        lists().display(userLists);
        renderNavOption('All tasks');
        tasks().display(allTasks);
        addPageListeners();
    }

    const addPageListeners = () => {
        const createTaskButton = document.getElementById('createTaskButton');
        const addListButton = document.getElementById('addListButton');
        const navAll = document.querySelector('[data-all]');
        const navToday = document.querySelector('[data-today]');
        const navWeek = document.querySelector('[data-week]');
        
        createTaskButton.addEventListener('click', initEditorClone);
        addListButton.addEventListener('click', initListClone);
        navAll.addEventListener('click', () => {
            renderNavOption('All tasks');
            tasks().display(allTasks);
        });
        navToday.addEventListener('click', () => {
            const todayTasks = tasks().getTodayTasks(allTasks);
            renderNavOption('Today');
            if (todayTasks.length === 0) {
                ui().renderMessage(`You're all caught up!`);
            } else {
                tasks().display(todayTasks);
            }
        });
        navWeek.addEventListener('click', () => {
            const weekTasks = tasks().getWeekTasks(allTasks);
            renderNavOption('This week');
            if (weekTasks.length === 0) {
                ui().renderMessage(`You're all caught up!`);
            } else {
                tasks().display(weekTasks);
            }
        });
    }

    const createMenu = () => {
        const menuContainer = document.getElementById('menuContainer');
        const menuBox = document.getElementById('menuBox');
        const clearCompleted = document.getElementById('clearCompleted');
        const menuImage = new Image(25, 25);
        menuImage.src = menu;
        menuContainer.prepend(menuImage);

        menuImage.addEventListener('click', () => {
            menuBox.classList.remove('hidden');
        });

        menuBox.addEventListener('mouseleave', () => {
            menuBox.classList.add('hidden');
        })

        clearCompleted.addEventListener('click', () => {
            const activeList = lists().getActiveList();
            if (activeList === undefined) {
                tasks().clearCompleted(allTasks);
                tasks().display(allTasks);
            } else {
                tasks().clearCompleted(activeList.tasks);
                tasks().clearCompleted(allTasks);
                tasks().display(activeList.tasks);
            }
        })
    }

    const setPlaceholder = (element) => {
        element.placeholder = element.value;
        element.value = '';
    }

    const removeClickedClass = () => {
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));

        priorities.forEach(priority => {
            if (priority.classList.contains('clicked')) {
                priority.classList.remove('clicked');
            }
        });
    }

    return { initPage, initEditorClone, renderUserList, renderNavOption, renderMessage, setPlaceholder, }
}

export { ui }