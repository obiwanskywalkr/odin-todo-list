import '/src/style.css';
import icon from '/src/img/icon-cat.png';
import { lists } from "./list.js";
import { tasks } from "./task.js";
import { editor } from "./editor.js"
import { userLists, navLists } from "./data.js";

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
        const cancelLlist = document.getElementById('cancelList');
        const submitList = document.getElementById('submitList');

        cancelLlist.addEventListener('click', () => {
            initTodoClone();
            renderNavOption('All tasks')
        });
        
        submitList.addEventListener('click', () => {
            const newList = lists().handleForm(userLists);
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

        return { todoCardContainer, listTitle, listDescription, submitQuickAdd }
    }

    const addTitleListeners = () => {
        listTitle.addEventListener('focus', () => {
            setPlaceholder(listTitle);
        }, { once: true });

        listTitle.addEventListener('focusout', (e) => {
            const activeList = lists().getActiveList(userLists, e);
            lists().updateTitle(activeList);
            lists().display(userLists);
        });
    }

    const addDescriptionListeners = () => {
        listDescription.addEventListener('focus', () => {
            setPlaceholder(listDescription);
        }, { once: true });

        listDescription.addEventListener('focusout', (e) => {
            const activeList = lists().getActiveList(userLists, e);
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

        currentTask.focus();
        editor().initListDropdown(userLists);
        addEditorListeners();

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
            const activeTask = tasks().getActiveTask(navLists[0].tasks, e);
            editor().handleSubtask(activeTask);
        });

        submitTask.addEventListener('click', () => {
            editor().handleForm();
            tasks().display(navLists[0].tasks);
            content.removeChild(editorCardContainer);
        });

        cancelEditor.addEventListener('click', (e) => {
            content.removeChild(editorCardContainer);
        })
    }

    const renderNavOption = (navOption) => {
        initTodoClone();

        listTitle.value = navOption;
        listTitle.setAttribute('readonly', 'readonly'); 
    
        todoCardContainer.removeChild(listDescription);

        tasks().display(navLists[0].tasks); 
        submitQuickAdd.addEventListener('click', (e) => {
            tasks().handleQuickAdd(navLists[0].tasks, e)
        });
    }

    const renderUserList = (listArray) => {
        initTodoClone();

        listTitle.value = listArray.title;
        listTitle.dataset.list = listArray.listID;
        addTitleListeners();
        
        if (listArray.description === '') {
            todoCardContainer.removeChild(listDescription);
        } else {
            listDescription.value = listArray.description;
            listDescription.dataset.list = listArray.listID;
            addDescriptionListeners();
        }

        if (listArray.tasks === '') { 
            submitQuickAdd.addEventListener('click', (e) => {
                tasks().handleQuickAdd(listArray, e);
            });
        } else {
            tasks().display(listArray.tasks); 

            submitQuickAdd.addEventListener('click', (e) => {
                tasks().handleQuickAdd(listArray, e);
            });
        }
    }

    const initPage = () => {
        const iconContainer = document.getElementById('iconContainer');
        const taskCatIcon = new Image(60, 60);
        taskCatIcon.src = icon;
        iconContainer.appendChild(taskCatIcon);

       renderNavOption('All tasks');
       lists().display(userLists);
       addPageListeners();
    }

    const addPageListeners = () => {
        const createTaskButton = document.getElementById('createTaskButton');
        const addListButton = document.getElementById('addListButton');
        const navOptions = document.querySelectorAll('[data-navOption]');
        
        createTaskButton.addEventListener('click', initEditorClone);
        addListButton.addEventListener('click', initListClone);
        navOptions.forEach(option => {
            option.addEventListener('click', () => {
                const navOption = (navLists.find( ({title}) => title === option.dataset.navoption)).title;
                renderNavOption(navOption);
            });
        }); 
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

    return { initPage, initEditorClone, renderUserList, setPlaceholder, }
}

export { ui }