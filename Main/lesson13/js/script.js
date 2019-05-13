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
                // hours.textContent = '00';
                // minutes.textContent = '00';
                // seconds.textContent = '00';
            }
        }

        updateClock();

        return '';
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

    descriptionBtn.forEach(function (item) {

        item.addEventListener('click', () => {
            overlay.style.display = 'block';
            item.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
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
            let formData = new FormData(elem);

            function postData(data) {

                return new Promise(function(resolve, reject) {
                    
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');

                    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
               
                    let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let data = JSON.stringify(obj);
        
                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                        } else {
                           reject();
                        }
                    });

                    request.send(data);

                });
            } //End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
                for (let i = 0; i < inputContacts.length; i++) {
                            inputContacts[i].value = '';
                        }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
           
        });
    }
    sendForm(form);
    sendForm(formContacts);

    // Slider

    // тот слайд, который показывается в текущий момент
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
    showSlides(slideIndex);
    
    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if ( n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
// определяем текущий слайд и устанавливаем его
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    //Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function() {
        persons.value = persons.value.replace(/\D/g, "");
        personsSum = +this.value;
        
        total = (daysSum + personsSum)* 4000;

        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
    });
    
    restDays.addEventListener('input', function() {
        restDays.value = restDays.value.replace(/\D/g, "");

        daysSum = +this.value;

        total = (daysSum + personsSum)*4000;

        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {           
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
    });

    place.addEventListener('change', function() {
        
       if (restDays.value == '' || persons.value == '') {
           totalValue.innerHTML = 0;
       } else {
           let a = total;
           totalValue.innerHTML = a * this.options[this.selectedIndex].value;
       }
    });
});