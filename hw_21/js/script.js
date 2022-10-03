const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
};


const getMoney = () => {
    return new Promise(
        function (resolve, reject) {
            const result = window.confirm('Подивитися баланс карті?');
            result ? resolve() : reject();
        }
    )
}

const startProgram = getMoney();

startProgram
    .then(
        function () {
            let currency;
            const availableUserCurrencies = Object.keys(userData);
            do {
                currency = prompt(`Введіть назву валюти: ${availableUserCurrencies.join(`, `)}`, availableUserCurrencies[0]);
                if (currency) currency = currency.replaceAll(` `, ``).toUpperCase();
            } while (!availableUserCurrencies.includes(currency))
            window.alert(`Баланс становить: ${userData[currency]} ${currency}`);
        },
        function () {
            let availableBankCurrencies = [];
            for (const bankDataKey in bankData) {
                if (bankData[bankDataKey][`max`] > 0) {
                    availableBankCurrencies.push(bankDataKey);
                }
            }
            const userCurrencies = Object.keys(userData);

            let availableCurrencies;
            if (userCurrencies.length > availableBankCurrencies.length) {
                availableCurrencies = userCurrencies.filter(currency => availableBankCurrencies.includes(currency));
            } else {
                availableCurrencies = availableBankCurrencies.filter(currency => userCurrencies.includes(currency));
            }


            let currency;
            do {
                currency = prompt(`Введіть назву валюти: ${availableCurrencies.join(`, `)}`, availableCurrencies[0]);
                if (currency) currency = currency.replaceAll(` `, ``).toUpperCase();
            } while (!availableCurrencies.includes(currency))

            let amount = +prompt(`Введіть сумму.`);
            if (isNaN(amount)) {
                window.alert(`Cуммa = 0 ${currency}`);
                amount = 0;
            }

            const userAmount = userData[currency];
            const bankMaxAmount = bankData[currency][`max`];
            const bankMinAmount = bankData[currency][`min`];

            if (amount > userAmount || amount > bankMaxAmount) {
                const maxAmount = userAmount > bankMaxAmount ? bankMaxAmount : userData[currency];
                window.alert(`Введена сума більша за доступну. Максимальна сума зняття: ${maxAmount} ${currency}`);
            } else if (amount < bankMinAmount) {
                const minAmount = bankData[currency][`min`];
                window.alert(`Введена сума менша за доступну. Мінімальна сума зняття: ${minAmount} ${currency}`);
            } else {
                window.alert(`От Ваші гроші ${amount} ${currency} ${bankData[currency][`img`]}`);
            }
        }
    )
    .finally(
        function () {
            window.alert(`Дякую, гарного дня 😊`);
        }
    )
