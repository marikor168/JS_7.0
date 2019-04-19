// ПЕРВОЕ ЗАДАНИЕ
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(week);
let weekDiv = document.querySelector('.week');

let a = '';
let today = new Date();

// так как индексы массива меньше на 1 значений дней недели
today = today.getDay()-1;
for (let i = 0; i < week.length; i++) {

    // так как в JS дни недели с воскресенья (то есть воскресенье это 0), а в строке 10 мы из 0 вычитали 1
    if (today == -1) {
        today = 6;
    }

    if ( (i == 5 || i == 6) && (i == today) ) {
        a += '<i>'+'<b>' + week[i] + '</b>'+'</i>'+ '<br>';
    } else if (i == today) {
        a += '<i>' + week[i] + '</i>'+ '<br>';
    } else if (i == 5 || i == 6) {
        a += '<b>' + week[i] + '</b>'+ '<br>';
    } else {
        a += week[i] +'<br>';
    }
}
weekDiv.innerHTML = a;



// ВТОРОЕ ЗАДАНИЕ
let arr = ['1654', '321', '456', '758', '5498', '3895', '757'];
console.log(arr);
let arrNew = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7) {
        arrNew.push(arr[i]);
    }
}

console.log(arrNew);