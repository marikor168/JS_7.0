let time = document.createElement('div');

let timerId = setTimeout(function timer() {

    let now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();

    function addZero() {
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
    timeNow = hours + ':' + minutes + ':' + seconds;
    document.body.appendChild(time);
    time.textContent = timeNow;

    setTimeout(timer, 1000);
});