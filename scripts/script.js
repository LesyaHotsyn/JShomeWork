let firstNumber;
let secondNumber;

firstNumber = prompt("Введіть перше число");
secondNumber = prompt("Введіть друге число");

if (firstNumber == secondNumber) {
    alert("Числа рівні");
} else if (firstNumber > secondNumber) {
    alert("Число " + firstNumber + "  більше, ніж число  " + secondNumber + "!");
} else {
    alert("Число " + secondNumber + "  більше, ніж число  " + firstNumber + "!");
}
