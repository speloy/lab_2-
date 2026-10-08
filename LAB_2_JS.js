const prompt = require("prompt-sync")();

const today = new Date();

const isoDate = today.toISOString().slice(0, 10);

const x = parseFloat(prompt("Enter a x value: "));
const c = parseFloat(prompt("Enter a c value: "));
const a = parseFloat(prompt("Enter an a value: "));
const b = parseFloat(prompt("Enter a b value: "));

let y;
let error = false;  

if (x <= a) {
    if (x - c <= 0) {
        console.log("Помилка: підлогарифмічний вираз має бути більше 0");
        error = true;
    } else {
        y = Math.log(x - c);
    }
} else if (x < b && x > a) {
    y = x + c;
} else if (x >= b && x > a) {
    if (c === 0) {
        console.log("Помилка: ділення на нуль");
        error = true;
    } else {
        y = x / c;
    }
} else {
    console.log("Некоректні вхідні дані");
    error = true;
}
if (!error) {
    const underRoot = Math.pow(y, 2) - Math.sin(y);
    if (underRoot < 0) {
        console.log("Помилка: вираз під коренем від’ємний");
    } else {
        const z = Math.sqrt(underRoot);
        console.log("Лабораторна робота №2\nНікітін Михайло      142Б\n" + isoDate  );
        console.log("x =", x, "\n" + "a =", a, "\n" + "b =", b, "\n" + "c =", c);
        console.log("y =", y, "\n" + "z =", z);
    }
}