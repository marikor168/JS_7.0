let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    /* isNaN возвращает true, когда туда попадают не цифры (т.е. пользователь ввел случайно символы, например)
    =="" - чтобы пользователь не оставил пустую строку
    ==null , чтобы пользователь не нажал ОТМЕНА*/
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay + ' рублей');
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i + 1] = opt;
        }
    },
    chooseIncome: function () {
        let items;

        while ((typeof (items)) !== 'string' || items == '' || items == null) {
            items = prompt('Что принесет дополительный доход? (Перечислите через запятую', '');
        }
        appData.income = items.split(', ');

        appData.income.push(prompt('Может что-то ещё?', ''));
        appData.income.sort();
        
        let chooseIncomeItem = '\n';
        appData.income.forEach(function (item, i) {
            chooseIncomeItem += (i + 1) + ') ' + item + ' \n';
        });
        alert('Способы доп. заработка: ' + chooseIncomeItem);
    },
    output: function () {
        console.log('Наша программа включает в себя данные:');
        for (let key in appData) {
            if ((typeof (appData[key]) !== 'function') && (typeof (appData[key]) !== 'object')) {
                console.log(key + ': ' + appData[key] + ' \n');
            }
            if ((typeof (appData[key]) === 'object')) {
                console.log(key + "[");
                for (let i in appData[key]) {
                    console.log(i + ': ' + appData[key][i] + ' \n');
                }
                console.log("]");
            }
        }
    }
};