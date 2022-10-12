const LOGIN = 'admin';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;

        for(let i=1; i<4; i++){
            userLogin = prompt('Логін:');
            userPassword = prompt('Пароль:');
            if(userPassword === PASSWORD && userLogin === LOGIN){
                alert("Welcome!");
                break;
            } else if (!userLogin){
                alert('Введіть логін');
            } else  if(!userPassword){
                alert('Введіть пароль');
            } else {
                alert('Дані вказано не вірно! Маєте всього 3 спроби. Це була ' + i + ' спроба');
            }
        }

    }
authorize();