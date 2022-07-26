let arr = [];
let numberArrayLength, isArrayLengthNumber;

do {
    const inputArrayLength = prompt(`Enter the length of array. 2 - 10`, `2`);
    isArrayLengthNumber = !isNaN(inputArrayLength); //Переменная для дальнейшей проверки. Ввели ли мы данные типа Number.
                                                    //Ведь можем ввести все что угодно.
    if (isArrayLengthNumber) {   //Если ввели данные типа Number, проверяем дальше.
        numberArrayLength = Number(inputArrayLength);
        if (numberArrayLength !== 0) {  //Если inputArrayLength !== 0 или пустой строке или null => проверяем дальше.

            const isNegative = inputArrayLength[0] === `-`; // Является ли inputArrayLength отрицательным числом.
            numberArrayLength = isNegative ? Math.abs(numberArrayLength) : numberArrayLength;

            const izInteger = Number.isInteger(numberArrayLength);// Является ли inputArrayLength рациональным числом.
            numberArrayLength = izInteger ? numberArrayLength : Math.round(numberArrayLength);

        }
    }
}
while (!isArrayLengthNumber || numberArrayLength < 2 || numberArrayLength > 10)


for (let i = 0; i < numberArrayLength; i++) {
    const randomValue = Math.round(Math.random() * 10);
    arr[i] = randomValue;
}
console.log(`Array: ${arr}`);


let productArrayElements = 1;
for (let i = 0; i < numberArrayLength; i++) {
    productArrayElements *= arr[i];
}
console.log(`Product of array\`s elements: ${productArrayElements}`);

