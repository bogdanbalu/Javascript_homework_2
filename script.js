console.log("Tipăriți toate numerele pare de la 0 la 10");
const startNumber = 0;
const endNumber = 10;

const evenNumbers = (start, end) => {
    for (let i = 0; i <= 10; i += 2) {
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

const resultSumVersionOne = sumNumbers(arr1);
console.log(`Rezultatul operatiilor calculat cu for este: ${finalResult}`);

console.log("-----------------------------------------------------");

const getResult = (array) => {
    return array.reduce(sum);
}

const sum = (previousValue, currentValue) => {
    return previousValue + currentValue;
}

const resultCaulculateSum = getResult(arr1);
console.log(`Rezultatul operatiilor calculat cu functia reduce este: ${resultCaulculateSum}`);

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
console.log(`Array-ul inversat cu for este: ${newArray}`);

console.log("------------------------------------------");

const reversalArray2 = (array) => {
    return array.reverse();
}
console.log(`Array-ul initial este: ${initialArray}`);

const resultReversalArray2 = reversalArray2(initialArray);
console.log(`Array-ul inversat cu functia reverse este: ${resultReversalArray2}`);

console.log('\n');

console.log("Returnează numărul de vocale dintr-un șir de caractere (string)");

const string = "string de test";

const countingVowels = (string) => {
    const voice = [];
    const stringUnion = string.replace(/ /g,'');
    const stringToLowerCase = string.toLowerCase();
    const stringToArray = stringToLowerCase.split('');
    for (const value of stringToArray) {
        newArrayWithVoice(value, voice)
    }
    return voice.length
}

const newArrayWithVoice = (value, newArray) => {
    switch(value) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u": 
        case "ă": 
        case "i": 
        case "â":
            return newArray.push(value)
    }
}

const counter = countingVowels(string);
console.log(`Numarul de vocale este: ${counter}`);



