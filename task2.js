var fin = {
    q: 'Вы отлично перекусили. Игра завершена!\n',
    options: ['1 - Сыграть еще раз.', '2 - Покинуть игру.'],
    links: ['loop', 'exit']
}

var ep4 = {
    q: 'Вы накололи дров, чем изрядно порадовали повара.\n' +
    'Он накормил Вас вкусным обедом. Игра завершена!\n',
    options: ['1 - Пойти пообедать.', '2 - Еще наколоть дров...'],
    links: [fin, 'again']
   }

var ep3 = {
 q: 'Вы решили пойти прогуляться.\n' +
 'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
 'Вы решаете дойти до озера, полюбоваться его красотойю\n' +
 'С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес.\n' +
 'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
 'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
 'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
 options: ['1 - Подождать обед в столовой.', '2 - Поколоть дров перед обедом.'],
 links: [fin, ep4]
}


var ep2 = {
    q: 'Вы решили поспать до обеда.\n' +
    'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
    'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
    options: ['1 - Пойти прогуляться.','2 - Пойти пообедать.'],
    links: [ep3,fin]
}

var start = {
    q:'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
    'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
    'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
    options: ['1 - Поспать до обеда.','2 - Пойти прогуляться.'],
    links: [ep2, ep3]
}

// выбранное действие
var selectedOption;
// точка входа
var ep = start;
// конструктор объекта с информацией о каждом шаге
function Step(npp, str) {
    this.counter = npp;
    this.do = str;
}
// массив с шагами
var steps = [];
var stepsCounter = 0;


do {
    selectedOption = +prompt(ep.q + ep.options.join('\n') + '\n-1 - Выход из игры');
    
    
    if (selectedOption == -1) {
        steps.push(new Step(++stepsCounter, "Игра завершена досрочно."));
        console.log("Игра завершена.");
        break;
    }
    else {
        if (isAnswer(ep.options.length, selectedOption)) {
            if (ep.links[selectedOption - 1] == 'exit') { // если выходим из игры
                steps.push(new Step(++stepsCounter, "Выход из игры в конце игры."));
                break;
            }
            if (ep.links[selectedOption - 1] != 'again') { // если не повторяется тот же эпизод
                if (ep.links[selectedOption - 1] != 'loop') { // если повторяем игру сначала
                    steps.push(new Step(++stepsCounter, ep.options[selectedOption-1]));
                    ep = ep.links[selectedOption - 1];
                }
                else {
                    ep = start;
                    steps.push(new Step(++stepsCounter, "Повтор игры."));
                }

            }
            else {
                steps.push(new Step(++stepsCounter, ep.options[selectedOption-1]));
            }
        }
    }
} while (true);

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}


var n = +prompt("Введите номер шага от 1 до " + stepsCounter);
alert("Шаг № "+ steps[n-1].counter + " Действие: " + steps[n-1].do);
console.log(steps);

    
