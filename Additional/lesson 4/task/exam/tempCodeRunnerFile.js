function getFriendlyNumbers(start, end) {
    let arrFriendlyNumbers = [];
    let arrFriendlyPair = [];
    if ((typeof (start) !== 'number') || (typeof (end) !== 'number') ||
    start > end || start < 0 ||
        Number.isInteger(start) != true || Number.isInteger(end) != true) {
        return false;
    } else {
        for (let i = start; i <= end; i++) {
            let secondNum = getDivisorsSum(i);
            if (i < secondNum && getDivisorsSum(secondNum) == i) {
                arrFriendlyPair = [i, secondNum];
                arrFriendlyNumbers.push(arrFriendlyPair);
            }
        }
        return arrFriendlyNumbers;
    }
}

getFriendlyNumbers(1, 1);

// получаем сумму делителей
function getDivisorsSum(num) {
    return getSum(getDivisors(num));
}

// получаем делители
function getDivisors(num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

// получаем сумму элементов массива
function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}