let firstNumber;
let secondNumber;
let arithmeticOperation;
let sum;
let subtraction;
let division;
let multiplication;
let permission;

firstNumber = prompt("Введіть перше число");
secondNumber = prompt("Введіть друге число");

if (firstNumber == secondNumber) {
    alert("Числа рівні");
} else if (firstNumber > secondNumber) {
    alert("Число " + firstNumber + "  більше, ніж число  " + secondNumber + "!");
} else {
    alert("Число " + secondNumber + "  більше, ніж число  " + firstNumber + "!");
}

alert("Переходимо до  наступної частини ;)");

firstNumber = prompt("Введіть перше число");
secondNumber = prompt("Введіть друге число");
arithmeticOperation = prompt("Введіть дію над числами. Це може бути +, -, / чи *");

switch (arithmeticOperation) {
    case "+":
        sum = firstNumber + secondNumber;
        alert("Сума чисел дорівнює: " + sum);
        break;
    case "-":
        subtraction = firstNumber - secondNumber;
        alert("Різниця чисел дорівнює: " + subtraction);
        break;
    case "/":
        division = firstNumber / secondNumber;
        alert(" Діленння чисел дорівнює: " + division);
        break;
    case "*":
        multiplication = firstNumber * secondNumber;
        alert(" Добуток чисел дорівнює: " + multiplication);
        break;    
    default: 
        alert("Дію введено не коректно. Спробуйте ще раз!");
}

alert("Давайте пограємо:3 Для того щоб проїхатися на американських гірках, дайте відповіді на декілька запитань");

userAge = prompt("Скільки Вам років?");

if (userAge < 12 || userAge > 80){
    alert("Вибачте, вхід заборонено!");
} else if ((userAge >= 12 && userAge < 18)||(userAge > 60 && userAge <= 80 )) {
    permission = prompt("Вам дозволили батьки чи опікуни? так чи ні?");
    switch(permission) {
        case "так":
            alert("Чудово, проходьте! Приємних вражень!");
            break;  
        case "Так":
            alert("Чудово, проходьте! Приємних вражень!");
            break;   
        case "yes":
            alert("Чудово, проходьте! Приємних вражень!");
            break;
        case "Yes":
            alert("Чудово, проходьте! Приємних вражень!");
            break;  
        default: 
            alert("Вибачте, вхід заборонено!");
    }
} else {
    alert("Проходьте! Приємних вражень!");
}