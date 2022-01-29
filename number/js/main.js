let first = prompt("Введите первое число", '');
let second = prompt("Введите второе число", '');
    if (Number(first) > Number(second)) {
        alert("Первое число больше");
    }
    else if (Number(first) < Number(second)) {
        alert("Второе число больше");
    }
    else if (first == '' || first == null, second == '' || second == null) {
        alert( 'Отменено' );
    }
    else if (Number(first) == Number(second)) {
        alert("Числа равны");
    }
    else {
        alert("Вы ввели не числа");
    }