let firstNumber;
let secondNumber;
let arithmeticOperation;
let sum;
let subtraction;
let division;
let multiplication;

firstNumber = prompt("Введіть перше число");
secondNumber = prompt("Введіть друге число");

if (firstNumber == secondNumber) {
    alert("Числа рівні");
} else if (firstNumber > secondNumber) {
    alert("Число " + firstNumber + "  більше, ніж число  " + secondNumber + "!");
} else {
    alert("Число " + secondNumber + "  більше, ніж число  " + firstNumber + "!");
}


arithmeticOperation = prompt("Введіть дію над числами. Це може бути +, -, / чи *");

switch (arithmeticOperation) {
    case "+":
        sum = firstNumber + secondNumber;
        alert("Сума чисел дорівнює: " + sum);
        break;
    case "-":
        subtraction = firstNumber - secondNumber;
        alert("  " + subtraction);
        break;
    case "/":
        division = firstNumber / secondNumber;
        alert("  " + division);
        break;
    case "*":
        multiplication = firstNumber * secondNumber;
        alert("  " + multiplication);
        break;    
    default: 
        alert("Дію введено не коректно. Спробуйте ще раз!");
}