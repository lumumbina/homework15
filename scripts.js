document.write('Задание 1. Отнимает от первого делит на второе<br>');
function calc(a, b, c) {
	return (a - b) / c;
}

document.write('Результат: ' + calc(10, 4, 3), '</br>');

document.write('<br>Задание 2. Возвращает куб числа и его квадрат<br>');
let square, cub;
function calcNumbers(n) {
	square = n * n;
	cub = n * n * n;
}

calcNumbers(4);
document.write('Квадрат числа: ' + square + '. Куб числа: ' + cub + '.</br>');

document.write('<br>Задание 3. Большее и меньшее из чисел<br>');
let a = 15, b = 5;
function max(a, b) {
	if (a > b) {
		return a;
	} else if (a < b) {
		return b;
	} else {
		document.write('Числа равны.</br>');
	}
}

function min(a, b) {
	if (a > b) {
		return b;
	} else if (a < b) {
		return a;
	} else {
		document.write('Числа равны.</br>');
	}
}

document.write('Наибольшее из чисел: ' + max(a, b) + '. Меньшее из чисел: ' + min(a, b) + '.</br>');

document.write('<br>Задание 4. Возвращает массив и выводит его<br>');
let arr = [];
function returnArr() {
	let arrFirst = prompt('Ввести первое число массива', '1');
	let arrLast = prompt('Ввести последнее число массива', '20');
	for(i = +arrFirst; i <= +arrLast; i++) {
		arr.push(i);
	}
	return arr;
}
function writeArr() {
	document.write('Массив равен: ' + returnArr(), '.</br>');
}

writeArr();

document.write('<br>Задание 5. Четное или нечетное целое число<br>');
function isEven(n) {
	if (isNaN(n)) {
		return document.write('Вы ввели не число');
	} else if (n % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

document.write('Четное либо нечетное число: ' + isEven(59), '</br>');

document.write('<br>Задание 6. Массив с четными числами<br>');
let arr_1 = [];

for(let i = 0; i < arr.length; i++) {
	if(isEven(+arr[i]) === true) {
		arr_1.push(arr[i]);
	}
}

document.write('Массив с четными числами: ' + arr_1, '.</br>');

document.write('<br>Задание 7. Пирамидка из чисел<br>');
function piramidOfnumbers(height) {
	for(i = 1; i <= height; i++) {
		for(j = 1; j <=i; j++) {
			if(arguments.length > 1) {
				document.write(arguments[arguments.length - 1]);
			} else {
				document.write(i);
			}
		}
		document.write('</br>')
	}
}

piramidOfnumbers(9, '*');

document.write('<br>Задание 8. Равнобедренный треугольник из звездочек<br>');

let h = 10;
for(let i = 1; i <= h; i++) {
	for(let k = 1; k <= h - i; k++) {
		document.write(`&ensp;`);
	}
	for(let j = 0; j < i*2-1; j++) {
		document.write('*');
	} document.write('</br>');
}

let h1 = 10;
for(let i = h1; i >= 1; i--) {
	for(let k = h - i; k >= 1; k--) {
		document.write(`&ensp;`);
	}
	for(let j = 0; j < i*2-1; j++) {
		document.write('*');
	} document.write('</br>');
}

document.write('<br>Задание 9. Вывод чисел Фибоначи<br>');
function Fibo(numes) {
	let arrFibo = [0, 1];
	for (let i = 0; i <= numes; i++) {
		if (i === arrFibo[arrFibo.length-1] + arrFibo[arrFibo.length-2]) {
			arrFibo.push(i);
		}
	}
	return arrFibo;
}
 document.write('Последовательность Фибоначи: ' + Fibo(1000), '</br>');