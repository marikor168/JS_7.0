// ПЕРВОЕ
let str = 'урок-3-был слишком легким';
let firstSymbol = str.charAt(0).toUpperCase();
str = str.substr(1);
str = firstSymbol + str;
// console.log(str);

// ВТОРОЕ
let target = '-',
    pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    // console.log(foundPos);
    str = replaceAt(str, foundPos, ' ');
    pos = foundPos + 1;
}

function replaceAt(stringM, index, replacement) {
    return stringM.substring(0, index) + replacement + stringM.substring(index + replacement.length);
}

console.log(str);

// ТРЕТЬЕ
str = cutWord(str, 'легким');
str = str.substring(0, str.length - 2) + 'о';
console.log(str);

function cutWord(stringM, word) {
    return stringM.substr(stringM.indexOf(word, 0), (stringM.indexOf(word, 0) + word.length));
}

// ЧЕТВЕРТОЕ
let arr = [20, 33, 1, 'Человек', 2, 3];
let sum = 0;

for (i = 0; i < arr.length; i++) {
if (typeof(arr[i]) == 'number') {
    arr[i] **= 3;
    sum += arr[i];
}
}
console.log(Math.sqrt(sum));

// ПЯТОЕ
function sliceString(strUser) {
    if (typeof(strUser) != 'string') {
        alert('Вы передали не строку!');
    }
    
    strUser = strUser.trim();
    
    if (strUser.length < 50) {
        console.log(strUser);
    } else {    
        strUser = strUser.slice(0, 50) + '...';
        console.log(strUser);
    }
}
sliceString('Привет, я строка');