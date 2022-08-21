class Vegetable {
    name = '';
    icon = '';
    price = 0;
    season = false;

    constructor(data) {
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;
        Object.assign(this, data);
    }

    getPrice() {
        return this.isSeason() ? this.seasonKoef * this.price : this.price;
    }

    getInfo() {
        const seasonStr = this.isSeason() ? ` Season: ${this.season}.` : '';
        return `Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.getPrice()}.` + seasonStr;
    }

    isSeason() {
        return !!this.season;
    }
}


class VegetableListComponent {

    constructor(vegetables) {
        this.infoList = vegetables.map((vegetable) => vegetable.getInfo());
    }


    render() {
        const items = this.infoList
            .map((info) => `<li>${info}</li>`)
            .join('');
        return `<ul>${items}</ul>`;
    }

}


const vegetablesData = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];




const vegetables = vegetablesData.map(data => new Vegetable(data));
const htmlOutput = new VegetableListComponent(vegetables).render();
document.write(htmlOutput);

