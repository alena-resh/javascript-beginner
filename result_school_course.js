// // Переменные

// let cat = 'Мурзик'
// cat = 'Барсик'

// console.log(cat)


// const dog = 'Шарик'
// // dog = 'Test'

// console.log(dog)

// // Типы данных

// let string = 'String'
// let number = 122
// let boolean = true
// let object = {

// }


// // Математические операторы

// // let result = 10 + 5

// // result = 10 - 5

// // result = 10 / 5

// // console.log(result)


// let a = 15
// let b = 8
// let c = a + b
// c = a / b

// console.log(c)

// // Операторы сравнения ===, <, >, <=, >=, !===

// let result = 10 === 5
// result = 10 !== 5
// console.log(result)


// let a = 15;
// let b = 25;
// let c = 35;
// let d = 45;

// let sum = a + b;
// let divide = d / a;
// let mult = c * d;
// let subtract1 = b - b;
// let subtract2 = d - b;

// console.log(sum);
// console.log(divide);
// console.log(mult);
// console.log(subtract1);
// console.log(subtract2);

// let less1 = a < b;
// console.log(less1);

// let less2 = a < d;
// console.log(less2);

// let more = a > b;
// console.log(more);

// let moreEqual = c >= c;
// console.log(moreEqual);

// let equal = b === d;
// console.log(equal);

// let equalD = d === d;
// console.log(equalD);

// let notEqual = c !== a;
// console.log(notEqual);

// Структуры данных - массив

let array = [1, 'test', true, false]
// console.log(array[1])

// Объекты

let object = {
    cat: 'Alice',
    dog: 'Bob',
    number: 23,
    array: [2, 4, 6]
}

// console.log(object.array[1])

// Условные ветвления

// if (10 < 5) {
//     console.log('Cheers, code works')
// } else {
//     console.log('Does not work')
// }

// Логические операторы
// Логический И -  && и ИЛИ - ||

// if (5 > 3 || 7 === 8) {
//     console.log('Cheers code works!')
// }


// Циклы

// 1 - инициализация, создание счетчика
// 2 - условие при котором цикл работает (true/false)
// 3 - результиоующая операция

for (let i = 0; i < 10; i = i + 1) {
    // console.log(i)
}

// применим скидку 10 процентов
// let price = [100, 200, 300]

// price[0] = price[0] * 0.9
// price[1] = price[0] * 0.9
// price[2] = price[0] * 0.9

// console.log(price)

let prices = [100, 200, 300];

for (let i = 0; i < prices.length; i++) {
  prices[i] = prices[i] * 0.9;
}

console.log(prices);
// В консоли выведется: [90, 180, 270]


// Функции

// function getDetails(boxes) {
//     return boxes * 60 * 0.9
// }

// let store = getDetails(1000)
// let store2 = getDetails(5000)
// let store3 = getDetails(15000)

// console.log(store3)
