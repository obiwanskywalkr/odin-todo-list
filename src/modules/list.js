import { userLists } from './data';
import { ui } from './ui';

const List = (title, description, tasks, listID) => {

    return { title, description, tasks, listID }
}

const lists = () => {
// x    getters and setters
// x    lists display controls
// x    list form controls
// remove lists
// check for existing list with same name?? - logic in old index
// handleForm displays the new list onclick-submit

    const display = (listArray) => {
        const listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';

        listArray.forEach(list => {
            const listItem = document.createElement('button');
            listContainer.appendChild(listItem);
            listItem.classList.add('textButton');
            listItem.textContent = list.title;
            listItem.dataset.listId = list.listID;
            listItem.addEventListener('click', (e) => {
                ui().renderList(listArray, e);
            });
        });
    }

    const handleForm = () => {    
        const listID = userLists.length + 1;
        const newList = List(getTitleFromInput(), getDescriptionFromInput(), '', listID);
        
        userLists.push(newList);
        console.log(listID);
        display(userLists);
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

    const getActiveList = (e) => {
        const elementID = parseInt(e.target.dataset.listId);
        console.log(e);
        const activeList = userLists.find( ({ listID }) => listID === elementID);

        return activeList
    }

    return { display, handleForm, updateTitle, updateDescription, getActiveList }
}

export { List, lists }