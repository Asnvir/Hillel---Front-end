class Coffee {
    title = "";
    ingredients = {};

    constructor(obj) {
        Object.assign(this,obj);
    }

    makeCoffee(){
       return  this.renderCup();
    }

    renderCup() {
        return `
                <div class="cup">
                    ${this.renderCoffee()}
                </div>
`
    }

    renderCoffee() {
        return `<div class="${this.getClassName()}">
                    ${this.renderIngredients()}
                </div>
                <p class="coffee__title">${this.title}</p>`
    }

    getClassName(){
        return COFFEE_CLASSES[this.constructor.name] ? COFFEE_CLASSES[this.constructor.name] : "coffee";
    }

    renderIngredients() {
        return `<div class="coffee__ingredients">
                        ${this.listIngredients()}
                </div>`
    }

    listIngredients() {
        let ingredients = [];

        for (const ingredientsKey in this.ingredients) {
            ingredients.push(`<p style="height: ${this.ingredients[ingredientsKey]}%" class="ingredient ${ingredientsKey.replaceAll(" ","__")}">${ingredientsKey}</p>`)
        }

        return ingredients.join("")
    }

}

class Espresso extends Coffee{
    constructor(obj) {
        super(obj);
    }
}

class EspressoMilk extends Coffee{
    constructor(obj) {
        super(obj);
    }
}

class Alcoholic extends Coffee{
    constructor(obj) {
        super(obj);
    }
}

class Dessert extends Coffee{
    constructor(obj) {
        super(obj);
    }
}

const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
};



const COFFEE_CLASSES = {
    Coffee: "coffee",
    Espresso: "coffee coffee--espresso",
    EspressoMilk: "coffee coffee--espressoMilk",
    Alcoholic: "coffee coffee--alcoholic",
    Dessert: "coffee coffee--dessert"
};

const CLASS_NAMES = {
    Coffee: coffee => new Coffee(coffee),
    Espresso: coffee => new Espresso(coffee),
    EspressoMilk: coffee => new EspressoMilk(coffee),
    Alcoholic: coffee => new Alcoholic(coffee),
    Dessert: coffee => new Dessert(coffee)
};


const buildCoffees = (COFFEE_TYPES) => {
    let res = [];
    for (const coffeetypesKey in COFFEE_TYPES) {
        for (let i = 0; i < COFFEE_TYPES[coffeetypesKey].length; i++) {
            const typeOfCoffee = CLASS_NAMES[coffeetypesKey];
            const coffee = COFFEE_TYPES[coffeetypesKey][i];
            res.push(typeOfCoffee ? typeOfCoffee(coffee) : new Coffee(coffee));
        }
    }

    return res;
};

const renderCoffees = buildCoffees(COFFEE_TYPES)
    .map(coffee => coffee.makeCoffee())
    .join("");

const renderedHTML = `<section class="cups">
                           ${renderCoffees}
                      </section>`;


document.write(renderedHTML);


