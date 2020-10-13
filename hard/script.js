'use strict'

let lang = prompt('Выберите язык: "ru" или "en"');

//Вывод дней недели через if
/*
if (lang.toLowerCase() === 'ru') {
    alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang.toLowerCase() === 'en') {
    alert ('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
} else {alert ('Ввели неверное значение языка');}
*/
//Вывод дней недели через switch-case
/*
switch (lang.toLowerCase()) {
    case 'ru':
    alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
    case 'en':
    alert ('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
    break;
    default: alert ('Ввели неверное значение языка');
}
*/
//Вывод через многомерный массив
/*
let day = [
    ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    ['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday']
];

let i;
if (lang.toLowerCase() === 'ru') {
    i = 0;
} else if (lang.toLowerCase() === 'en') {
    i = 1;
}
alert(day[i]);
*/
//Вторая часть задания

let namePerson = prompt('Введите имя');

let message = (namePerson === 'Артем') ? console.log('Вы директор'):
    (namePerson === 'Максим') ? console.log('Вы преподаватель'): console.log('Вы студент');
    