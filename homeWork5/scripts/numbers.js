alert('Прості числа в проміжку, заданих Вами чисел');

let number1 = Number(prompt('Введіть початкове число'));
let number2 = Number(prompt('Введіть кінцеве число'));

const primeNumber = (a, b) => {
    if(a <= 1){
        alert('Помилка, число менше або дорівнює 1')
    }else{
        nextPrime:
        for (let i = a; i <= b; i++){
            for (j = 2; j< i; j++){
                if (i % j === 0){
                    continue nextPrime;
                }
            }
            alert('Просте число: '+ i);
            console.log(i);
        }
    }
};

primeNumber(number1, number2)