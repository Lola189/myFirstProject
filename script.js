'use strict'

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
const screenPrice = +prompt('Сколько будет стоить данная работа?', "120");
const rollback = 10;
const adaptive = confirm('Нужен ли адаптив на сайте?');

const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrise1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrise2 = +prompt('Сколько это будет стоить?');

const fullPrice = screenPrice + servicePrise1 + servicePrise2;
const rollInter = fullPrice*(rollback/100);
const servicePercentPrice = Math.ceil(fullPrice - rollInter);
console.log(servicePercentPrice);

if (fullPrice >= 300) {
    console.log("Даем скидку в 10%");
} else if (150 <= fullPrice && fullPrice < 300) {
    console.log("Даем скидку в 5%")
} else if (0 < fullPrice && fullPrice < 150) {
    console.log("Скидка не предусмотрена")
} else {
    console.log("Что то пошло не так")
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");
console.log(screens.toLowerCase());
console.log(screens.split(", "));
console.log("Откат посреднику за работу: " + fullPrice*(rollback/100) + "%")