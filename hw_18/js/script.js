const TIMER_CHANGE_COLOR = 500, TIMER_CHANGE_COORDINATES = 1000, MAX_RGB_VAL = 255, MIN_VAL = 0;
const body = document.querySelector(`body`);
const mySpan = document.querySelector(`#mySpan`);


const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const setColors = () => {
    const r = generateRandomNumber(MIN_VAL, MAX_RGB_VAL);
    const g = generateRandomNumber(MIN_VAL, MAX_RGB_VAL);
    const b = generateRandomNumber(MIN_VAL, MAX_RGB_VAL);
    mySpan.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

}

const changeColor = () => setInterval(setColors, TIMER_CHANGE_COLOR);

const setCoordinates = () => {
    const maxAllowWidth = body.clientWidth - mySpan.clientWidth;
    const maxAllowHeight = body.clientHeight - mySpan.clientHeight;
    const left = generateRandomNumber(MIN_VAL, maxAllowWidth);
    const top = generateRandomNumber(MIN_VAL, maxAllowHeight);

    mySpan.style.top = top + 'px';
    mySpan.style.left = left + 'px';

}

const movingBlock = () => setInterval(setCoordinates, TIMER_CHANGE_COORDINATES);

const runProgram = () => {
    movingBlock();
    changeColor();
}

runProgram();



