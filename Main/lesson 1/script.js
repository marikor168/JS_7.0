let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let itemOfExpenses = prompt('Введите обязательную статью расходов в этом месяце', ''),
    moneyExpenses = +prompt('Во сколько обойдется?', '');
appData.expenses[itemOfExpenses] = moneyExpenses;

let restMoney = money - moneyExpenses;

itemOfExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
moneyExpenses = +prompt('Во сколько обойдется?', '');
appData.expenses[itemOfExpenses] = moneyExpenses;
console.log(appData);

restMoney -= moneyExpenses;

// бюджет на один день
// let budgetDay = restMoney/30;
// alert('Ваш бюджет на 1 день составляет: ' + budgetDay + ' рублей');

// оставшийся бюджет на один день с учетом введенной даты
let timeDate = +time.substr(8);
let budgetDay = (restMoney)/(30 - timeDate);
alert('Ваш бюджет на 1 день (с учетом оставшихся дней в месяце) составляет: ' + budgetDay + ' рублей');
