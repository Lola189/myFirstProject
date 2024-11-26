const title = "My First Project";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 30;
const rollback = 10;
const fullPrice = 50;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");
console.log(screens.toLowerCase());
console.log(screens.split(", "));
console.log("Откат посреднику за работу: " + fullPrice*(rollback/100) + "%")