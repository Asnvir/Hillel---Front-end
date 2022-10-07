const URL = 'https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json';
const URL_CAR = 'https://mc-astro.github.io/tesla-roadster-colors/img';

const getBody = () => $(document.body);

const renderButton = (car) => {
    const divColors = $(`#color-pickerID`);
    const button = $(`<button class="button"></button>`);
    divColors.append(button);
    button.css('background',`${car[`color`]}`);
    button.on('click',function (){
        renderCar(car);
    });
};

const renderColors = (cars) => {
    const divColors = $(`<div class="color-picker" id="color-pickerID"></div>`);
    divColors.insertAfter(`#brID`);
    cars.forEach(car=>renderButton(car));
};

const renderCar = (car) => {
    const imgCar = car[`img`];
    const titleColor = car[`title`];
    const url = URL_CAR + `/${imgCar}.jpg`
    const img = $(`<img src="${url}" style="width: 100%" alt="Tesla Roadster ${titleColor}" id="imageID">`);
    $(`#carID`).html(img);
    const divText = $(`<div class="text" id="textID">${titleColor}</div>`);
    divText.insertAfter(`#imageID`);
};

const renderCars = (cars) => {
    const divCar = $(`<div class="car fade" id="carID"></div>`);
    divCar.insertAfter(`#titleID`);
    $(`<br id="brID">`).insertAfter(divCar);
    const randomCar = cars[Math.floor(Math.random() * cars.length)];
    renderCar(randomCar);
    $(divCar).insertAfter($(`#titleID`));
};

const renderTitle = () => {
    const div = $(`<div class="title" id="titleID"></div>`)
        .append($(`<h1>Tesla</h1>`))
        .append($(`<h2>Roadster</h2>`))
        .append($(`<h3>Colors</h3>`));

    $(getBody()).prepend(div);
};



const renderPage = (cars) => {
    renderTitle();
    renderCars(cars);
    renderColors(cars);
};


$.ajax({
	url : URL,
	method: 'GET',
    dataType: 'json',
	success: data => renderPage(data),
	error: error => console.log(error)
});