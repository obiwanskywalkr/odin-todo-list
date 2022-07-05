import './style.css';
import icon from './img/icon-cat.png';
import { navLists, userLists } from './data';
import { master, lists, tasks, editor, } from './ui.js';


window.onload = function() {
    const iconContainer = document.getElementById('iconContainer');
    const taskCatIcon = new Image(60, 60);
    taskCatIcon.src = icon;
    iconContainer.appendChild(taskCatIcon);

    const navOptions = Array.from(document.querySelectorAll('[data-navOption'));
    const event = new CustomEvent('click', {detail: navOptions[0].dataset.nav});
    
    navOptions[0].addEventListener('click', (e) => {
        master().renderList(navLists, e);
    });
    
    navOptions[0].dispatchEvent(event);

    lists().display(userLists);
}