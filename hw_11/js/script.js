const products = [
    ['apple', 10],
    ['banana', 8],
    ['mango', 20],
    ['grape', 18]
]

function summerValue(value) {
    return value * 0.8;
}

function winterValue(value) {
    return value * 2;
}

function getPrice(products, seasonFunc) {
    const copiedProducts = JSON.parse(JSON.stringify(products));
    (typeof seasonFunc === 'function') ? copiedProducts.forEach(value => value[1] = seasonFunc(value[1])) : copiedProducts;
    return copiedProducts
        .map(value => value[1])
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

}

console.log(`regular : ${getPrice(products)}`);
console.log(`winterValue : ${getPrice(products, winterValue)}`);
console.log(`summerValue : ${getPrice(products, summerValue)}`);

