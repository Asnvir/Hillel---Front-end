const CURRENT_YEAR = 2022;

const firstName = prompt('Enter you name.');
const lastName = prompt('Enter your lastname.');
const year = Number(prompt('Enter your birth year.'));
const month = Number(prompt('Enter you birth month.'));
const day = Number(prompt('Enter you birth day.'));
const age = (CURRENT_YEAR - year).toString();
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
const leapYearString = isLeapYear ? ' (leap year),' : ',';

let astrologicalSymbol, astrologicalSymbolName;


if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    astrologicalSymbol = '♒';
    astrologicalSymbolName = 'Aquarius';
} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    astrologicalSymbol = '♓';
    astrologicalSymbolName = 'Pisces';
} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    astrologicalSymbol = '♈';
    astrologicalSymbolName = 'Aries';
} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    astrologicalSymbol = '♉';
    astrologicalSymbolName = 'Taurus';
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    astrologicalSymbol = '♊';
    astrologicalSymbolName = 'Gemini';
} else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    astrologicalSymbol = '♋';
    astrologicalSymbolName = 'Cancer';
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    astrologicalSymbol = '♌';
    astrologicalSymbolName = 'Leo';
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    astrologicalSymbol = '♍';
    astrologicalSymbolName = 'Virgo';
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    astrologicalSymbol = '♎';
    astrologicalSymbolName = 'Libra';
} else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    astrologicalSymbol = '♏';
    astrologicalSymbolName = 'Scorpio';
} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    astrologicalSymbol = '♐';
    astrologicalSymbolName = 'Sagittarius';
} else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    astrologicalSymbol = '♑';
    astrologicalSymbolName = 'Capricorn';
}


const stringToOutput = `User Bio: ${firstName} ${lastName}, ${age} years old ${leapYearString} ${astrologicalSymbolName} ${astrologicalSymbol};`;
document.getElementById('output').innerHTML = stringToOutput;