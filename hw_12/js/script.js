const users = [
    ["john", "red", 5, ["ball", "book", "pen"]],
    ["becky", "blue", 10, ["tape", "backpack", "pen"]],
    ["susy", "red", 55, ["ball", "eraser", "pen"]],
    ["tyson", "green", 1, ["book", "pen"]],
];

const columnTitles = ['Name', 'Command', 'Score', 'Data'];


// Task 1
let arrayTask1 = [];
users.forEach(element => arrayTask1.push(element[0] + '!'));
console.log(`Task 1: ${arrayTask1}`);


//Task 2
const arrayTask2 = users.map(element => element[0] + '?');
console.log(`Task 2: ${arrayTask2}`);


//Task 3
const arrayTask3 = users.filter(element => element[1] === 'red');
console.log(`Task 3: ${arrayTask3}`);


//Task 4
const totalScore = arrayTask3
    //.map(element => element[2])
    .reduce((total, curItem) => total + curItem[2], 0);
console.log(`Task 4: ${totalScore}`);


//Task build a table
const buildTHead = (arr) => {
    const THs = arr.map(element => `<th>${element}</th>`);
    return `<thead><tr>${THs.join('')}</tr></thead>`;
}


const normalizeTDValue = (value) => Array.isArray(value) ? value.join('; ') : value;

const buildTDs = (arr) => {
    return arr
        .map(normalizeTDValue)
        .map((value) => `<td>${value}</td>`)
}


const buildTR = (arr) => {
    const TDs = buildTDs(arr);

    return `<tr>${TDs.join('')}</tr>`;
}


const buildTBody = (arr) => {
    const TRs = arr.map(buildTR);

    return ` <tbody>${TRs.join('')}</tbody>`;
}


const buildTable = (arrTitles, arrBody, totalScore) => {
    const thead = buildTHead(arrTitles);
    const tbody = buildTBody(arrBody);
    const tfoot = `<tfoot><tr><td colspan = '4'>Total score: ${totalScore}</td></tr></tfoot>`;

    return `<table>${thead}${tbody}${tfoot}</table>`;
}

const table = buildTable(columnTitles, arrayTask3, totalScore);
document.write(table);



