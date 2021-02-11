// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function convertNumberToObj(num) {
    var obj = {};
    if (num > 999) {
        console.log("Число больше 999!");
    }
    else {
        obj.hundreds = num >= 100 ? Math.floor(num / 100) : 0;
        obj.tens = (num - obj.hundreds*100) >= 10 ? Math.floor((num - obj.hundreds*100) / 10) : 0;
        obj.units = num - obj.hundreds*100 - obj.tens*10;
    }
    return obj;
}


var num = +prompt("Введите число от 0 до 999");
while (isNaN(num) || !isFinite(num)) {
    num = +prompt("Введите число от 0 до 999");
}

var obj = convertNumberToObj(num);
console.log(obj);
