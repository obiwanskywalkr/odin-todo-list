import deleteButton from '/src/img/delete.png';
import { ui } from './ui';
import { userLists, updateLocalStorage } from './data';

const List = (title, description, tasks, listID) => {
    return { title, description, tasks, listID }
}

const lists = () => {
    const display = (listArray) => {
        const listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';

        listArray.forEach(list => {
            const listTemplate = document.getElementById('list-template');
            const listClone = document.importNode(listTemplate.content, true);
            listContainer.appendChild(listClone);

            const lists = Array.from(document.querySelectorAll('[data-list]'));
            const deleteIcons = Array.from(document.querySelectorAll('[data-delete]'));
            const index = listArray.indexOf(list);

            lists[index].textContent = list.title;
            lists[index].dataset.list = list.listID;
            lists[index].addEventListener('click', () => {
                ui().renderUserList(list);
            });

            deleteIcons[index].src = deleteButton;
            deleteIcons[index].addEventListener('click', () => {
                handleDelete(listArray, list);
                resetIDs(listArray);
                display(listArray);
            });
        });
    }

    const handleForm = (listArray) => {    
        const listID = listArray.length + 1;
        const newList = List(getTitleFromInput(), getDescriptionFromInput(), [], listID);
        
        listArray.push(newList);

        return newList
    }

    const handleDelete = (listArray, list) => {
        const index = listArray.indexOf(list);
        listArray.splice(index, 1);
    }

    const getTitleFromInput = () => {
        const listTitle = document.getElementById('listTitle');
        return listTitle.value;
    }

    const getDescriptionFromInput = () => {
        const listDescription = document.getElementById('listDescription');
        return listDescription.value;
    }
    
    const updateTitle = (list) => {
        const title = getTitleFromInput();

        if (title === '') return
        
        list.title = title;
    }

    const updateDescription = (list) => {
        const description = getDescriptionFromInput();

        if (description === '') return
        
        list.description = description;
    }
    
    const getActiveList = () => {
        const listTitle = document.getElementById('listTitle').value;
        const activeList = userLists.find( ({title}) => title === listTitle);
        
        return activeList
    }

    const resetIDs = (listArray) => {
        let i = 1;
        listArray.forEach(list => {
            list.listID = i;
            i++;
        });
    }

    return { display, handleForm, updateTitle, updateDescription, getActiveList }
}

export { List, lists }