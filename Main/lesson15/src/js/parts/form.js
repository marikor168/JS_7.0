function form() {
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

                return new Promise(function (resolve, reject) {

                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');

                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    let obj = {};
                    formData.forEach(function (value, key) {
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
}

module.exports = form;