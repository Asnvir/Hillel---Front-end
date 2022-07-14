const USER_STRING = prompt('Enter a string.', 'How much is the fish?');
const USER_ID = Number(prompt('Enter an ID.', '1'));
const USER_INDEX = Number(prompt('Enter an index.\nIf you chose an ID = 4 , you can leave this field empty.'));
const arrEmojis = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355, 0x1F354, 0x1F35F];

let tempResult, outputResult, stringAfter, firstPart, secondPart, thirdPart;


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


switch (USER_ID) {
    case 1:
        tempResult = USER_STRING.codePointAt(USER_INDEX);
        outputResult = `The unicode of symbol ${USER_STRING[USER_INDEX]} is ${tempResult}.`;
        console.log(outputResult);
        break;

    case 2:
        firstPart = USER_STRING.slice(0, USER_INDEX);
        secondPart = USER_STRING.slice(USER_INDEX + 1);
        stringAfter = `${firstPart}${secondPart}`;
        outputResult = `Before: ${USER_STRING}\nAfter: ${stringAfter}`;
        console.log(outputResult);
        break;

    case 3:
        const randomInt = getRandomIntInclusive(0, 10);
        firstPart = USER_STRING.slice(0, USER_INDEX);
        secondPart = String.fromCodePoint(arrEmojis[randomInt]);
        thirdPart = USER_STRING.slice(USER_INDEX + 1);
        stringAfter = `${firstPart}${secondPart}${thirdPart}`;
        outputResult = `Before: ${USER_STRING}\nAfter: ${stringAfter}`;
        console.log(outputResult);
        break;

    case 4:
        stringAfter = USER_STRING.replace(/\s/g, '');
        outputResult = `Before: ${USER_STRING}\nAfter: ${stringAfter}\nLen without spaces: ${stringAfter.length}`;
        console.log(outputResult);
        break;

    default:
        outputResult = 'Перезагрузите страницу и введите цифру от 1 до 4.\nА затем укажите индекс.';
        alert(outputResult);
        break;
}
