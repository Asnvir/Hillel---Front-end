const sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

const summer_sports = sports.slice(5);
const winter_sports = sports.slice(0, 5);
const fruits = winter_sports.splice(2, 1).concat(summer_sports.splice(2, 2));

console.log('*** Winter sports ***');
for (let i = 0; i < winter_sports.length; i++) {
    console.log(`${winter_sports[i].join(": ")}`);
}

console.log(`\n*** Summer sports ***`);
for (let i = 0; i < summer_sports.length; i++) {
    console.log(`${summer_sports[i].join(": ")}`);
}

console.log(`\n*** Fruits ***`);
for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i].join(": ")}`);
}