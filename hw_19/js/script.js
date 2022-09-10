const   body = document.querySelector(`body`),
        MOVE_SIZE = 10,
        TIMER_BEMPS = 2000,
        JUMP_SIZE = MOVE_SIZE * 2,
        MESSAGE = 'БЕМС';


const isValidMove = (currentPos, block, direction) => {
    const horizontalBorder = body.clientWidth / 2 - block.clientWidth / 2;
    const verticalBorder = body.clientHeight / 2 - block.clientHeight / 2;
    const nextPosition = Math.abs(currentPos) + MOVE_SIZE;
    switch (direction) {
        case 'left':
        case 'right':
            return nextPosition < horizontalBorder;
        case 'up':
        case 'down':
            return nextPosition < verticalBorder;
    }
}

const printBEMPS = (block) => {
    block.innerHTML = `<p style="color: red">${MESSAGE}</p>`;
    setTimeout(() => block.innerHTML = '', TIMER_BEMPS);
}

const jumpOut = (currentPos, block, direction) => {
    let newValue;
    if (direction === 'right' || direction === 'down') newValue = (currentPos + JUMP_SIZE) + 'px';
    else newValue = (currentPos - JUMP_SIZE) + 'px';

    switch (direction) {
        case 'right':
            block.style.left = newValue;
            break;
        case 'left':
            block.style.left = newValue;
            break;
        case 'down':
            block.style.top = newValue;
            break;
        case 'up':
            block.style.top = newValue;
            break;
    }
    printBEMPS(block);
}

const movingBlock = (block, direction) => {
    const currentBlockLeft = isNaN(parseInt(block.style.left)) ? 0 : parseInt(block.style.left);
    const currentBlockTop = isNaN(parseInt(block.style.top)) ? 0 : parseInt(block.style.top);

    if (direction === 'ctrl' || direction === 'space') block.style.transitionDuration = '1s';
    else block.style.transitionDuration = '0s';

    switch (direction) {
        case 'left':
            if (isValidMove(currentBlockLeft, block, 'left')) {
                block.style.left = (currentBlockLeft - MOVE_SIZE) + `px`;
            } else {
                jumpOut(currentBlockLeft, block, 'right');
            }
            break;

        case 'right':
            if (isValidMove(currentBlockLeft, block, 'right')) {
                block.style.left = (currentBlockLeft + MOVE_SIZE) + `px`;
            } else {
                jumpOut(currentBlockLeft, block, 'left');
            }
            break;

        case 'up':
            if (isValidMove(currentBlockTop, block, 'up')) {
                block.style.top = (currentBlockTop - MOVE_SIZE) + `px`;
            } else {
                jumpOut(currentBlockTop, block, 'down');
            }
            break;

        case 'down':
            if (isValidMove(currentBlockTop, block, 'down')) {
                block.style.top = (currentBlockTop + MOVE_SIZE) + `px`;
            } else {
                jumpOut(currentBlockTop, block, 'up');
            }
            break;

        case 'ctrl':
            block.style.height = block.clientHeight * 0.6 + 'px';
            block.style.width = block.clientWidth * 1.25 + 'px';
            break;

        case 'space':
            block.style.top = (currentBlockTop - MOVE_SIZE) + `px`;
            setTimeout(() => block.style.top = currentBlockTop + 'px', TIMER_BEMPS / 2);
            break;
    }
}

const HANDLERS = {
    17: block => movingBlock(block, 'ctrl'), //ctrl
    32: block => movingBlock(block, 'space'), //space
    37: block => movingBlock(block, 'left'),// ArrowLeft
    38: block => movingBlock(block, 'up'), // ArrowUp
    39: block => movingBlock(block, 'right'), // ArrowRight
    40: block => movingBlock(block, 'down')// ArrowDown
}


const handleKeyDown = (block, {keyCode}) => {
    const handler = HANDLERS[keyCode];
    handler && handler(block);
}

const init = () => {
    const block = document.querySelector(`#block`);
    document.addEventListener(`keydown`, event => handleKeyDown(block, event))
}


init();




