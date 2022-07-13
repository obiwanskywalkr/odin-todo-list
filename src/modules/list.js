import deleteButton from '/src/img/delete.png';
import { ui } from './ui';

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
            lists[index].addEventListener('click', (e) => {
                const activeList = getActiveList(listArray, e);
                ui().renderUserList(activeList);
            });

            deleteIcons[index].src = deleteButton;
            deleteIcons[index].addEventListener('click', (e) => {
                const activeList = getActiveList(listArray, e);
                remove(listArray, activeList);
            });
        });
    }

    const handleForm = (listArray) => {    
        const listID = listArray.length + 1;
        const newList = List(getTitleFromInput(), getDescriptionFromInput(), [], listID);
        
        listArray.push(newList);
        display(listArray);

        return newList
    }

    const remove = (listArray, list) => {
        const index = listArray.indexOf(list);
        listArray.splice(index, 1);
        resetIDs(listArray);
        display(listArray);
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

    const getActiveList = (listArray, e) => {
        if (e.target.dataset.list === undefined) {
            const target = e.currentTarget;
            const sibling = target.previousElementSibling;

            const elementID = parseInt(sibling.dataset.list);
            const activeList = listArray.find( ({ listID }) => listID === elementID);

            return activeList
        } else {
            const elementID = parseInt(e.target.dataset.list);
            const activeList = listArray.find( ({ listID }) => listID === elementID);
            
            return activeList
        } 
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