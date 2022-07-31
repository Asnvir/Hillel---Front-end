const hero = ['Ivan'];
const native = ['York', 'Of'];
const destination = ['Poltava', 'In'];
const templateOfArray = ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain'];


let rainbow = destination.concat(native, hero);
rainbow.reverse();


for (let index = 0; index < templateOfArray.length; index++) {
    const currentElement = rainbow[index];
    const shouldBeElement = templateOfArray[index];
    const isEqual = currentElement === shouldBeElement;

    rainbow[index] = isEqual ? currentElement : shouldBeElement;
}

let TDs = [];

for (let i = 0; i < rainbow.length; i++) {
    TDs.push(`<td><div class="circle"></div><p class="circle-label">${rainbow[i]}</p></td>`);
}

document.write(`<table>
                     <tr>${TDs.join('')}</tr>
                </table>`
);