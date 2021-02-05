// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2  -- оператор инкремента стоит до переменной А, значение переменной А сначала увеличивается на 1 потом присваивается переменной С
// d = b++; alert(d);           // 1  -- оператор инкремента стоит после переменной B, поэтому значение переменной B сначала присваивается переменной D, потом увеличивается на 1
// c = (2+ ++a); alert(c);      // 5 -- значение переменной А равно 2, инкремент увеличивает значение переменной А на 1, затем выполняется сложение с 2
// d = (2+ b++); alert(d);      // 4 -- значение переменной B равно 2 и увеличивается только после выполнения операции сложения с 2
// alert('a = ' + a);                    // 3 -- в строке 5 значение переменной А стало равно 3
// alert('b = ' + b);                    // 3 -- в строке 6 значение переменной B равно 2 и увеличилось инкрементом на 1
// Почему код даёт именно такие результаты?

// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2); // 5 -- а *= 2 эквивалент а = а * 2
// alert('x = ' + x)

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// var a = parseInt(Math.random()*20-10);
// var b = parseInt(Math.random()*20-10);
// document.write('a = '+ a + ' , b = ' + b + ' // ');
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
// document.write((a >= 0 && b >= 0) ? 'a и b положительные, их разность = ' + Math.abs(a-b) : (a < 0 && b < 0) ? 'a и b отрицательные, их произведение = ' + (a * b) : 'a и b разных знаков, их сумма = ' + (a + b));
// document.write('<br>');

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
// var a = Math.round(Math.random()*15);
// document.write('a [0..15] = '+ a + ' // ');
// switch (a) {
//     case 1: document.write('числа от ' + a + ' до 15 //  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15'); break;
//     case 2: document.write('числа от ' + a + ' до 15 //  2,3,4,5,6,7,8,9,10,11,12,13,14,15'); break;
//     case 3: document.write('числа от ' + a + ' до 15 //  3,4,5,6,7,8,9,10,11,12,13,14,15'); break;
//     case 4: document.write('числа от ' + a + ' до 15 //  4,5,6,7,8,9,10,11,12,13,14,15'); break;
//     case 5: document.write('числа от ' + a + ' до 15 //  5,6,7,8,9,10,11,12,13,14,15'); break;
//     case 6: document.write('числа от ' + a + ' до 15 //  6,7,8,9,10,11,12,13,14,15'); break;
//     case 7: document.write('числа от ' + a + ' до 15 //  7,8,9,10,11,12,13,14,15'); break;
//     case 8: document.write('числа от ' + a + ' до 15 //  8,9,10,11,12,13,14,15'); break;
//     case 9: document.write('числа от ' + a + ' до 15 //  9,10,11,12,13,14,15'); break;
//     case 10: document.write('числа от ' + a + ' до 15 //  10,11,12,13,14,15'); break;
//     case 11: document.write('числа от ' + a + ' до 15 //  11,12,13,14,15'); break;
//     case 12: document.write('числа от ' + a + ' до 15 //  12,13,14,15'); break;
//     case 13: document.write('числа от ' + a + ' до 15 //  13,14,15'); break;
//     case 14: document.write('числа от ' + a + ' до 15 //  14,15'); break;
//     case 15: document.write('числа от ' + a + ' до 15 //  15');
// }

// function getNumbers(numFrom, numTo) {
//     var str = '' + numFrom;
//     if (numFrom < numTo) {
//         str += ', ' + getNumbers(++numFrom,numTo);
//     } 
//     return str;
// }
// document.write('числа от ' + a + ' до 15 // ' + getNumbers(a, 15));

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
// var a = parseInt(Math.random()*20-10);
// var b = parseInt(Math.random()*20-10);
// document.write('a = '+ a + ' , b = ' + b + ' <br> ');
// function calcSum(arg1, arg2) {
//      return arg1 + arg2;
// }
// function calcMult(arg1, arg2) {
//     return arg1 * arg2;
// }
// function calcDif(arg1, arg2) {
//     return arg1 - arg2;
// }
// function calcDel(arg1, arg2) {
//     return arg1 / arg2;
// }
// document.write('a + b = ' + calcSum(a,b,'+') + ' <br> ');
// document.write('a - b = ' + calcDif(a,b,'-') + ' <br> ');
// document.write('a * b = ' + calcMult(a,b,'*') + ' <br> ');
// document.write('a / b = ' + calcDel(a,b,'/') + ' <br> ');

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
// var a = parseInt(Math.random()*20-10);
// var b = parseInt(Math.random()*20-10);
// document.write('a = '+ a + ' , b = ' + b + ' <br> ');
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case '+': return arg1 + arg2;
//         case '-': return arg1 - arg2;
//         case '*': return arg1 * arg2;
//         case '/': return arg1 / arg2;
//     }
// }
// document.write('a + b = ' + mathOperation(a,b,'+') + ' <br> ');
// document.write('a - b = ' + mathOperation(a,b,'-') + ' <br> ');
// document.write('a * b = ' + mathOperation(a,b,'*') + ' <br> ');
// document.write('a / b = ' + mathOperation(a,b,'/') + ' <br> ');

// 7) *Сравнить null и 0. Попробуйте объяснить результат.
// typeof(null) // "object"
// null == 0 // false 

// 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

var val = Math.round(Math.random()*10);
var pow = Math.round(Math.random()*3);

function power(val, pow) {
    var res = val;
    if (pow > 1) {
        res *= power(val, --pow);
    } 
    return res;
}
document.write(val + ' в степени ' + pow + ' = ' + power(val, pow));