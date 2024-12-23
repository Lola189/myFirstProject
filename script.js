'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt('Как называется ваш проект?', "Калькулятор верстки")
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные")

    screenPrice = prompt('Сколько будет стоить данная работа?')

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?')
    } while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }

        do {
            sum = prompt('Сколько это будет стоить?')
        } while (!isNumber(sum))
    }

    return sum
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return screenPrice + allServicePrices
}

const getTitle = function () {
    let strT = title.trim().toLocaleLowerCase();
    return (title = strT.charAt(0).toUpperCase() + strT.slice(1));
};

const getServicePercentPrices = function () {
    return (Math.ceil(fullPrice - (fullPrice * (rollback / 100))))
}

const getRollbackMessage = function (prise) {
    if (prise >= 300) {
        return "Даем скидку в 10%"
    } else if (150 <= prise && prise < 300) {
        return "Даем скидку в 5%"
    } else if (0 < prise && prise < 150) {
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }
}


asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle()

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices)
console.log(screens)