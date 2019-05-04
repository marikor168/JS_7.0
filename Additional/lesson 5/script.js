let time = document.createElement('div'),
    now = new Date(),
    day = 0,
    seconds = now.getSeconds(),
    minutes = now.getMinutes(),
    hours = now.getHours(),
    date = now.getDate(),
    month = now.getMonth() + 1,
    year = now.getFullYear();

function showDay() {
    let options = {
        weekday: 'long'
    };

    day = now.toLocaleString("ru", options);
}

showDay();

function addZero() {
    if (month / 10 < 1) {
        month = '0' + month;
    }
    if (date / 10 < 1) {
        date = '0' + date;
    }
    if (hours / 10 < 1) {
        hours = '0' + hours;
    }
    if (minutes / 10 < 1) {
        minutes = '0' + minutes;
    }
    if (seconds / 10 < 1) {
        seconds = '0' + seconds;
    }
}

addZero();
timeNow = hours + ':' + minutes + ':' + seconds + ' ' + date + '.' + month + '.' + year;
document.body.appendChild(time);
time.textContent = timeNow;

let divDay = document.createElement('div');
document.body.appendChild(divDay);
divDay.textContent = 'Сегодня: ' + day;

function countDiff() {
    let firstDate = document.querySelector(".firstDate").value;
    let dateOne = new Date(firstDate);
    console.log(dateOne);
    let secondDate = document.querySelector(".secondDate").value;
    let dateTwo = new Date(secondDate);
    document.querySelector(".dateResult").value = Math.abs((dateOne - dateTwo) / (1000 * 60 * 60 * 24));

}

let button = document.querySelector(".submit");
button.addEventListener("click", countDiff);