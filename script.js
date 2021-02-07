// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

function numberSimple(val) {
    for (var i = 2; i <= Math.sqrt(val); i++)  {
        if (val % i == 0) {
            return false;
        }
    } 
    return true;
}

for (var i = 1; i <=100; i++)  {
    if (numberSimple(i)) {
        document.write(i + ' ');
    }
}


// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var currency = 'руб.';

var basket = [
    {
        name: 'Товар 1',
        price: 10,
        count: 2
    },
    {
        name: 'Товар 2',
        price: 20,
        count: 1
    },
    {
        name: 'Товар 3',
        price: 20,
        count: 3
    }
];

var sum = 0;

for (var i = 0; i < basket.length; i++) {
    sum += basket[i].price*basket[i].count;
}

document.write('<br>Стоимость корзины: ' + sum + ' ' + currency);

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(var i = 0; i < 10; console.log(i++)){}

