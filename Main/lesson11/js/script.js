window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    function tabs(tabsTitle, tabsWrapper, tabsContent) {

        let tab = document.getElementsByClassName(tabsTitle),
            info = document.getElementsByClassName(tabsWrapper)[0],
            tabContent = document.getElementsByClassName(tabsContent);

        let hideTabContent = (a = 1) => {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        };

        hideTabContent(1);

        let showTabContent = (b) => {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        };

        info.addEventListener('click', (event) => {
            let target = event.target;
            if (target && target.classList.contains(tabsTitle)) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }
    tabs('info-header-tab', 'info-header', 'info-tabcontent');

    //Timer

    let deadline = '2019-05-29';

        let getTimeRemaining = (endtime) => {

            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60));
    
            let addZero = () => {
                if (hours / 10 < 1) {
                    hours = '0' + hours;
                }
                if (minutes / 10 < 1) {
                    minutes = '0' + minutes;
                }
                if (seconds / 10 < 1) {
                    seconds = '0' + seconds;
                }
            };
    
            addZero();
    
            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        };

        let setClock = (id, endtime) => {

            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);
    
            function updateClock() {
    
                let t = getTimeRemaining(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
        
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
        };
 
    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBtn = document.querySelectorAll('.description-btn');

    descriptionBtn.forEach(function(item) {
    
        item.addEventListener('click', () => {
        overlay.style.display = 'block';
        item.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
        });
    
    close.addEventListener('click', () =>  {
        overlay.style.display = 'none';
        item.classList.remove('more-splash');
        document.body.style.overflow = '';
        });
    });  

    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');
    statusMessage.style.cssText = 'color: #fff; margin-top: 10px;';
    
    let inputPhone = input[0];
    inputPhone.addEventListener('input', () => {
        inputPhone.value = inputPhone.value.replace(/[^0-9+]/g, "");
        inputPhone.value = inputPhone.value.replace(/(?<!^)\+/g, "");
    });

    let formContacts = document.getElementById('form'),
        inputContacts = formContacts.getElementsByTagName('input');

    inputContacts[0].setAttribute('name', 'mail'); 
    inputContacts[1].setAttribute('name', 'tel');

    let inputTel = inputContacts[1];

    inputTel.addEventListener('input', () => {
        inputTel.value = inputTel.value.replace(/[^0-9+]/g, "");
        inputTel.value = inputTel.value.replace(/(?<!^)\+/g, "");
    });

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let formData = new FormData(elem);

            let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
            for (let i = 0; i < inputContacts.length; i++) {
                        inputContacts[i].value = '';
                    }
        });
    }
    sendForm(form);
    sendForm(formContacts);
    
});