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
    let arr1 = str1.toUpperCase().split('');
    let arr2 = str2.toUpperCase().split('');


    arr1 = Array.isArray(arr1) ? arr1 : [];
    arr2 = Array.isArray(arr2) ? arr2 : [];
    
    return arr1.length === arr2.length && arr1.every(el => arr2.includes(el)) ;
    }




// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false