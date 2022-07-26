const MIN_ARRAY_LENGTH = 2, MAX_ARRAY_LENGTH = 10;
let arr = [], arrayLength, isValidArrayLength, productArrayElements = 1;

do {
    const inputArrayLength = prompt(`Enter the length of array. ${MIN_ARRAY_LENGTH} - ${MAX_ARRAY_LENGTH}`, `${MIN_ARRAY_LENGTH}`);
    arrayLength = Number(inputArrayLength) || 0;

    const isNegative = arrayLength < 0;
    const isInteger = Number.isInteger(arrayLength);

    arrayLength = isNegative ? Math.abs(arrayLength) : arrayLength;
    arrayLength = isInteger ? arrayLength : Math.round(arrayLength);

    isValidArrayLength = arrayLength >= MIN_ARRAY_LENGTH && arrayLength <= MAX_ARRAY_LENGTH;
}
while (!isValidArrayLength)

for (let i = 0; i < arrayLength; i++) {
    const randomValue = Math.round(Math.random()*10);
    arr[i] = randomValue;
    productArrayElements *= randomValue;
}
console.log(`Array: ${arr}`);
console.log(`Product of array\`s elements: ${productArrayElements}`);

