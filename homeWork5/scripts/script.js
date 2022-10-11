var LOGIN = 'admin';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;

    do{
        userLogin = prompt('Логін:');
        if(!userLogin){
            alert('Введіть логін');
            continue;
        }

        userPassword = prompt('Пароль:');
        if(!userPassword){
            alert('Введіть пароль');
            continue;
        }

        if(userPassword === PASSWORD || userLogin === LOGIN){
            isAuthSuccess = true
        } else { 
            alert('Дані вказано не вірно!');
        } 

    } while (!isAuthSuccess);

    alert("Welcome!");
};

//authorize();

const drawPyramid = (height) => {
    for(let i = 0; i < height; i++){
        let spaceBefore = '';
        let stars = '';

        for(let j = 0; j < 2*i+1; j++){
            stars += "*";
        }

        for(let k = 0; k < height - i - 1; k++){
            spaceBefore += " ";
        }
        console.log(spaceBefore + stars);
    }
};

const desiredHeight = Number(prompt("Задайте висоту пірамідки"));
drawPyramid(desiredHeight);
