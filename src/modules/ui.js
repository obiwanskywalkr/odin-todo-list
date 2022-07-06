import '/src/style.css';
import icon from '/src/img/icon-cat.png';
import { lists } from "./list.js";
import { tasks } from "./task.js";
import { editor } from "./editor.js"
import { userLists, navLists, userTasks } from "./data.js";

const ui = () => {
// x    initialize templates 
// x    render controls
// x    event listener controls
// x    reset event listeners
// refactor render list

    const loadPage = () => {
        const navOptions = Array.from(document.querySelectorAll('[data-navOption'));
        const event = new CustomEvent('click', {detail: navOptions[0].dataset.nav});
        
        navOptions[0].addEventListener('click', (e) => {
            renderList(navLists, e);
        });
        
        navOptions[0].dispatchEvent(event);
    
        lists().display(userLists);
    }

    const loadIcon = () => {
        const iconContainer = document.getElementById('iconContainer');
        const taskCatIcon = new Image(60, 60);
        taskCatIcon.src = icon;
        iconContainer.appendChild(taskCatIcon);
    }

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
        const cancel = document.getElementById('cancel');
        const submitList = document.getElementById('submitList');

        cancel.addEventListener('click', loadPage);
        submitList.addEventListener('click', lists().handleForm);
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

    const initEditorClone = () => {
        if (content.contains(document.getElementById('editorCardContainer'))) return

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
        addEditorListeners();

        return { editorForm, currentTask, dueDate, listDropdown, subtaskContainer, notes }
    }

    const addEditorListeners = () => {
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        const createSubtaskButton = document.getElementById('createSubtaskButton');
        const submitTask = document.getElementById('submitTask');

        const removeClickedClass = () => {
            priorities.forEach(priority => {
                if (priority.classList.contains('clicked')) {
                    priority.classList.remove('clicked');
                }
            });
        }

        priorities.forEach(priority => {
            priority.addEventListener('click', (e) => {
                removeClickedClass();
                e.target.classList.add('clicked');
            });
        });

        createSubtaskButton.addEventListener('click', editor().handleSubtask);

        submitTask.addEventListener('click', () => {
            editor().handleForm();
            tasks().display(userTasks);
            content.removeChild(editorCardContainer);
        });
    }

    const renderList = (listArray, e) => {
        initTodoClone();

        const addTitleListeners = () => {
            listTitle.addEventListener('focus', () => {
                setPlaceholder(listTitle);
            }, { once: true });

            listTitle.addEventListener('focusout', (e) => {
                const activeList = lists().getActiveList(e);
                lists().updateTitle(activeList);
                lists().display(listArray);
            });
        }

        const addDescriptionListeners = () => {
            listDescription.addEventListener('focus', () => {
                setPlaceholder(listDescription);
            }, { once: true });

            listDescription.addEventListener('focusout', (e) => {
                const activeList = lists().getActiveList(e);
                lists().updateDescription(activeList);
            });
        }
        
        if (listArray.some( ({ title }) => 
        title === 'All tasks' || title === 'Today' || title === 'This week')) {
            listTitle.value = e.target.dataset.navoption;
            listTitle.setAttribute('readonly', 'readonly'); 
        
            todoCardContainer.removeChild(listDescription);

            tasks().display(userTasks); 
            submitQuickAdd.addEventListener('click', tasks().handleQuickAdd);
        } else {
            const activeList = lists().getActiveList(e);
            console.log(activeList);

            listTitle.value = activeList.title;
            listTitle.dataset.listId = activeList.listID;
            addTitleListeners();
            
            if (activeList.description === '') {
                todoCardContainer.removeChild(listDescription);
            } else {
                listDescription.value = activeList.description;
                listDescription.dataset.listId = activeList.listID;
                addDescriptionListeners();
            }

            tasks().display(userTasks); 
            submitQuickAdd.addEventListener('click', tasks().handleQuickAdd);
        }
    }

    const addPageListeners = (() => {
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
    })();

    const setPlaceholder = (element) => {
        element.placeholder = element.value;
        element.value = '';
    }

    return { loadPage, loadIcon, initEditorClone, renderList, setPlaceholder, }
}

export { ui }