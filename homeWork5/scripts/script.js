const LOGIN = 'admin';
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

authorize();


