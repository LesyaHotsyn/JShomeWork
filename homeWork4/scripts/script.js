const firstNumber = Number(prompt("Введіть перше число"));
const secondNumber = Number(prompt("Введіть друге число"));

const sumNumber = sumNumbers(firstNumber, secondNumber);

function sumNumbers(a, b){
   return a + b;
}
alert('Сума чисел дорівнює: ' + sumNumber);

const sumResult = (a, b) => a + b;

const sum = sumResult(firstNumber, secondNumber);

alert('Cума чисел, порахована з допомогою стрілочної ф-ї = ' + sum);


function getUserName() {
    let userName = prompt("Введіть Ваше ім'я?");
    let userAge = Number(prompt("Введіть Ваш вік"));

   if (userAge>30) {
        alert('Доброго дня, ' + userName + '!');
    } else {
        alert('Привіт, ' + userName + '!');
    }
}

getUserName();

function numberInPower(a = 0, b = 2){
    if (b == 0){ b = 2;}
 return(a**b);
}

let a = Number(prompt("Введіть число"));
let power = Number(prompt("Введіть степінь"));
const inPower = numberInPower(a, power);
alert("Число " + a + " в веденій степені = " + inPower);
