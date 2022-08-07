console.log("Tipăriți toate numerele pare de la 0 la 10");
const startNumber = 0;
const endNumber = 10;

const evenNumbers = (start, end) => {
    for (let i = start; i <= end; i += 2) {
        console.log(`Numarul este: ${i}`);
    }
}

const evenNumbersResult = evenNumbers(startNumber, endNumber);
console.log(evenNumbersResult);

console.log('\n');

console.log("Calculați suma numerelor dintr-un șir de numere");

const arr1 = [1, -5, 20, -34, 16, 29, 36, -4];
const arr2 = [3.45, -2.68, 356, -75.96, 64, 19.28];
let finalResult = 0;

const sumNumbers = (array) => {
    for (const element of array) {
        let result = finalResult + element;
        finalResult = result;
    }
}

const resultSumVersionOne = sumNumbers(arr2);
console.log(`Rezultatul operatiilor este: ${finalResult}`);

console.log("-----------------------------------------------------");

const getResult = (array) => {
    return array.reduce(sum);
}

const sum = (previousValue, currentValue) => {
    return previousValue + currentValue;
}

const resultCaulculateSum = getResult(arr1);
console.log(`Rezultatul operatiilor este: ${resultCaulculateSum}`);

console.log('\n');

console.log("Creați o funcție care inversează un șir de numere");

const initialArray = [1, -5, 20, -34, 16, 29, 36, -4];
const newArray = [];

const reversalArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
}

const resultReversalArray = reversalArray(initialArray);
console.log(`Array-ul initial este: ${initialArray}`);
console.log(`Array-ul inversat este: ${newArray}`);

console.log("------------------------------------------");

const reversalArray2 = (array) => {
    return array.reverse();
}
console.log(`Array-ul initial este: ${initialArray}`);

const resultReversalArray2 = reversalArray2(initialArray);
console.log(`Array-ul inversat este: ${resultReversalArray2}`);

console.log('\n');

console.log("Returnează numărul de vocale dintr-un șir de caractere (string)");

const string = "string de test";


const countingVowels = (string) => {
    const voice = [];
    const stringUnion = string.replace(/ /g,'');
    const stringToArray = stringUnion.split('');
}

const count = (value, voiceArray) => {
    switch(value) {
        case "e": 
            
    }
}




