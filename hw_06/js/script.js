let totalCost = 0,
    inputTypeOfLoaf,
    isHamburger,
    isCheeseBurger,
    isValidTypeOfLoaf,
    loafAdditionCost,
    inputAddExtraCheese,
    addExtraCheese,
    inputAddPotato,
    addPotato,
    inputSizeOfPotato,
    isSmallPotato,
    isMiddlePotato,
    isBigPotato,
    isValidSizePotato,
    inputAddSauce,
    addSauce,
    inputTypeOfSauce,
    isKetchup,
    isMayonnaise,
    isValidTypeOfSauce,
    lineOfOrder,
    lineOfLoaf,
    lineOfExtraCheese,
    lineOfPotato,
    lineOfSauce,
    lineOfCost;

const   HAMBURGER_COST = 10,
        CHEESEBURGER_COST = 15,
        CHEESEBURGER_DOUBLE_CHEESE_COST = 5,
        SMALL_POTATO_COST = 10,
        MIDDLE_POTATO_COST = 15,
        BIG_POTATO_COST = 20,
        KETCHUP_COST = 2,
        MAYONNAISE_COST = 3;

// ------------------------Section of cheeseburger/hamburger---------------------------------------------------
do {
    inputTypeOfLoaf = prompt('Choose type of loaf.Hamburger or cheeseburger.','cheeseburger');
    if (inputTypeOfLoaf) {
        inputTypeOfLoaf = inputTypeOfLoaf.replaceAll(' ', '').toLocaleLowerCase();
        isHamburger = inputTypeOfLoaf === 'hamburger';
        isCheeseBurger = inputTypeOfLoaf === 'cheeseburger';
        isValidTypeOfLoaf = isHamburger || isCheeseBurger;
    } else isValidTypeOfLoaf = false;
} while (!isValidTypeOfLoaf);

loafAdditionCost = isHamburger ? HAMBURGER_COST : CHEESEBURGER_COST;
totalCost += loafAdditionCost;

// ------------------------Section of extra cheese--------------------------------
if (isCheeseBurger) {
    inputAddExtraCheese = confirm('Would you like to add double cheese?');
    addExtraCheese = inputAddExtraCheese === true;
    if (addExtraCheese) totalCost += CHEESEBURGER_DOUBLE_CHEESE_COST;
}

// ------------------------Section of potato-----------------------------------------
inputAddPotato = confirm('Would you like potato?');
addPotato = inputAddPotato === true;
if (addPotato) {
    do {
        inputSizeOfPotato = prompt('Choose potato size: small/middle/big', 'small');
        if (inputSizeOfPotato) {
            inputSizeOfPotato = inputSizeOfPotato.replaceAll(' ', '').toLocaleLowerCase();
            isSmallPotato = inputSizeOfPotato === 'small';
            isMiddlePotato = inputSizeOfPotato === 'middle';
            isBigPotato = inputSizeOfPotato === 'big';
        } else {
            isSmallPotato = true;
            inputSizeOfPotato = 'small';
        }
        isValidSizePotato = isSmallPotato || isMiddlePotato || isBigPotato;
        if (!isValidSizePotato) alert('Please choose correct size of potato or leave field of potato size empty\nIf you leave size of potato empty,we will add a small potato by default.');
    } while (!isValidSizePotato);

    if (isSmallPotato) totalCost += SMALL_POTATO_COST;
    else if (isMiddlePotato) totalCost += MIDDLE_POTATO_COST;
    else totalCost += BIG_POTATO_COST;
}


// ------------------------Section of sauce-------------------------------------------------------
inputAddSauce = confirm('Would you like sauce?');
addSauce = inputAddSauce === true;
if (addSauce) {
    do {
        inputTypeOfSauce = prompt('Choose sauce: ketchup/mayonnaise','ketchup');
        if (inputTypeOfSauce) {
            inputTypeOfSauce = inputTypeOfSauce.replaceAll(' ', '').toLocaleLowerCase();
            isKetchup = inputTypeOfSauce === 'ketchup';
            isMayonnaise = inputTypeOfSauce === 'mayonnaise';
        } else {
            isKetchup = true;
            inputTypeOfSauce = 'ketchup';
        }
        isValidTypeOfSauce = isKetchup || isMayonnaise;
        if (!isValidTypeOfSauce) alert('Please choose correct type of sauce.\nIf you leave type of sauce empty, we will add a ketchup by default.');
    } while (!isValidTypeOfSauce)

    if (isKetchup) totalCost += KETCHUP_COST;
    else totalCost += MAYONNAISE_COST;
}



// ------------------------Section of view-----------------------------------------
lineOfOrder = '<h2>Your order:</h2>';
lineOfLoaf = `<li>Bulka 🍔: ${inputTypeOfLoaf} </li>`;

if (isCheeseBurger) {
    if (addExtraCheese) {
        lineOfExtraCheese = `<li>Extra cheese 🧀: yes </li>`;
    } else lineOfExtraCheese = '';
} else lineOfExtraCheese = '';

if (addPotato) {
    lineOfPotato = `<li>Potato 🍟: ${inputSizeOfPotato} </li>`;
} else lineOfPotato = '';

if (addSauce) {
    lineOfSauce = `<li>Sauce 🧂: ${inputTypeOfSauce} </li>`;
} else lineOfSauce = '';

lineOfCost = `<p>Price: ${totalCost + '$'} </p>`;


document.write(`${lineOfOrder}
	<ul>
		${lineOfLoaf}
		${lineOfExtraCheese}
		${lineOfPotato}
		${lineOfSauce}
	</ul>

	${lineOfCost}
`);