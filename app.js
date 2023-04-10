// 1. Переменные - хранят значение

// var firstName = 'Alena'
// const lastName = 'Lim'   // невозможно поменять значение переменной
// const isProgrammer = true
// let age = 25   // можно менять значение переменной
//const age = 25 

// console.log(firstName)
// console.log(age)
// console.log(isProgrammer)

// 2. Динамическая типизация - мутирование
// console.log('Имя человека: ' + firstName + ', а возраст: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3. Операторы JS
// let currentYear = 2023
// const birthYear = 1993

// const age = currentYear - birthYear
// console.log(age)


// const a = 10
// const b = 5

// let c = 32
// // c = c + a
// c += a
// c -= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(c)

// 4. Типы данных
// const isProgrammer = true
// const name1 = 'Test'
// const year = 26
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name1)
// console.log(typeof year)
// console.log(typeof x) // undefined
// console.log(typeof null)

// 5. Приоритет операторов

// const fullAge = 25
// const birthYear = 1993
// const currentYear = 2023

// // > < >= <=
// const isFullAge = (currentYear - birthYear) >= fullAge
// console.log(isFullAge)


// 6. Условные операторы
const courseStatus = 'ready'  //  ready, fail, pending

if (courseStatus === 'ready') {
console.log('Курс уже готов и его можно пройти')
}
else if (courseStatus === 'pending'){
    console.log('Курс в процессе разработки')
}
else {
    console.log('Курс не получился')
}

const num1 = 42 //  number
const num2 = '42' //  string
console.log(num1 === num2)  // приводит к одному типу данных, ===

const isReady = false
// if (isReady === true) {
//     console.log('Все готово!')
// }
// else {
//     console.log('Все не готово!')
// }
// Тернарные выражение 
isReady ? console.log('Все готово!') : console.log('Все не готово!')


// 7. Булевая логика - && и || или ! не

// 8. Функции - чтобы оптимизировать и не дублировать куски кода

function calculateAge(year) {
    return 2023 - year
}

// console.log(calculateAge(1993))
// console.log(calculateAge(1990))

// function logInfoAbout(name, year){
//     const age = calculateAge(year)

//     if (age > 0){
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// }
// else {
//     console.log('Это уже будущее!')
// }
// }
// logInfoAbout('Alena', 1993)
// logInfoAbout('Arkadiy', 2024)

// 10. Массивы

const cars = ['Mazda', 'Mersedes', 'Ford'] // массив состоящий из строк

console.log(cars)
console.log(cars[1])
console.log(cars[3])

cars[0] = 'Porshe'
cars[3] = 'Mazda'
console.log(cars)

// длина массива
console.log(cars.length)

// const cars = new Array ('Mazda', 'Mersedes', 'Ford')
// console.log(cars)

