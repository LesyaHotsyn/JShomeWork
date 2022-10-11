const LOGIN = 'ADMIN';
const PASSWORD = '123';

const authorize = () => {
    let userPassword;
    let userLogin;

    do{
        userLogin = prompt('Логін:');
        if(!userLogin){
            alert('Введіть логін');
            continue;
        }

        userLogin = prompt('Пароль:');
        if(!userLogin){
            alert('Введіть пароль');
            continue;
        }

        if(userPassword !== PASSWORD || userLogin !== LOGIN){
            alert('Дані не вірні!');
            continue;
        }

        break;
    } while (true);

    alert("Welcome");
};

authorize();