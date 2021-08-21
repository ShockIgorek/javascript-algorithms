/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
 */

function anagram(str1, str2) {
    const arr1 = str1.toLowerCase().split('');
    const arr2 = str2.toLowerCase().split('');
    console.log(arr1, arr2)

    return arr1.length === arr2.length && arr1.every(el => arr2.includes(el)) ;
    }




// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
//свой тест, уважаемые, я не понимаю у меня этот тест проходит проверку и показывает "true", но ваши тесты, почему=то не проходит
console.log(anagram('up', 'UP')); // true