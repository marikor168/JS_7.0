let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    li = document.createElement('li'),
    title = document.querySelector('.title'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    promptText = document.querySelector('.prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
document.body.style.backgroundSize = 'cover'; 

title.textContent = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

let opinion = prompt('Как вы относитесь к технике Apple?');
promptText.textContent = opinion;