const hero = ['Ivan'];
const native = ['York', 'Of'];
const destination = ['Poltava', 'In'];

let rainbow = destination.concat(native, hero);
rainbow.reverse();

rainbow = ['Richard'].concat(rainbow.slice(1, 3), ['Gave', 'Battle'], rainbow.slice(3));


let TDs = [];
const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];

for (let i = 0; i < rainbow.length; i++) {
    TDs.push(`<td><div class="circle" style="background-color: ${colors[i]}"></div><p class="circle-label">${rainbow[i]}</p></td>`);
}

document.write(`<table>
                     <tr>${TDs.join('')}</tr>
                </table>`
);