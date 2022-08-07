const animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];

const food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];

const universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]


function getInfo(array, tableName) {
    const tableTitle = `<caption>${tableName} Info</caption>`;


    let TRs = [];
    for (let indexTR = 0; indexTR < array.length; indexTR++) {
        let TDs = [];
        for (let indexTD = 0; indexTD < array[indexTR].length; indexTD++) {
            let value = array[indexTR][indexTD];
            const isArray = Array.isArray(value);
            if (isArray){
                value = value.join('; ');
            }
            const elementTD = `<td>${value}</td>`;
            TDs.push(elementTD);
        }
        TRs.push(`<tr>${TDs.join('')}</tr>`);
    }


    const tBody = `<tbody>${TRs.join('')}</tbody>`;
    const table = `<table>${tableTitle}${tBody}</table>`;
    document.write(table);
}



let inputNameArray,isValidNameArray;
do {
    inputNameArray = prompt('Write a name of array : animals | food | universes .', 'animals');
    if(inputNameArray) inputNameArray = inputNameArray.replaceAll(' ','').toLocaleLowerCase();
    const isAnimals = inputNameArray === 'animals';
    const isFood = inputNameArray === 'food';
    const isUniverses = inputNameArray === 'universes';
    isValidNameArray = isAnimals || isFood || isUniverses;
} while (!isValidNameArray);

switch (inputNameArray) {
    case 'animals':
        getInfo(animals, 'Animals');
        break;

    case 'food':
        getInfo(food, 'Food');
        break;

    case 'universes':
        getInfo(universes, 'Universes');
        break;
}






