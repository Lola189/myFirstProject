'use strict'

let title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
const screenPrice = +prompt('Сколько будет стоить данная работа?', "120");
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrise1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrise2 = +prompt('Сколько это будет стоить?');
const rollback = 10;

let allServicePrices
let fullPrice
let servicePercentPrice


const showTypeOf = function (variable) {
    console.log (variable, typeof variable);
}

const getAllServicePrices = function (servicePrise1, servicePrise2) {
    return (servicePrise1 + servicePrise2)
}

const getFullPrice = function (screenPrice) {
    return (screenPrice + allServicePrices)
}

const getTitle = function (title) {
    let strT = title.trim().toLocaleLowerCase();
    return (title = strT.charAt(0).toUpperCase() + strT.slice(1));
  };

const getServicePercentPrices = function (fullPrice, rollback) {
    return (Math.ceil(fullPrice - (fullPrice*(rollback/100))))
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


allServicePrices = getAllServicePrices(servicePrise1, servicePrise2);
fullPrice = getFullPrice(screenPrice);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title)


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice))
console.log(getServicePercentPrices)
console.log(screens)