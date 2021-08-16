/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
 */
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        let number = undefined;
        if (i % 3 === 0 && i % 5 === 0) {
            number = 'fizzbuzz'
        } else if (i % 3 === 0) {
            number = 'fizz'
        } else if (i % 5 === 0) {
            number = 'buzz'
        } else {
            number = i
        }
        console.log(number)
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));