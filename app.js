// 1. Функции - в js это объекты

//Function declaration - отличается тем что мы можем обращаться к ней так как захотим (перенести ее под greet ('Alena))

// function greet(name){
//     console.log('Hello - ', name)
// }

// //Function expression 

// const greet2 = function greet2(name) {
//     console.log('Hello 2 - ', name)
// }

// greet('Alena')
// greet2('Arkadiy')


// console.dir(greet)

// 2. Анонимные функции

// let counter = 0
// const interval = setInterval(function()
//     {
//     if (counter === 5){
//     clearInterval(interval)
//     }
//     else {
//     console.log(++counter)
//     }
// }, 1000)


// 3. Стрелочные функции

function greet(name){
     console.log('Hello - ', name)
 }

 const arrow = (name, age) => {
    console.log('Hello - ', name, age)
 }

 arrow('Alena', 33)

 // 4. Параметры по умолчанию

 const sum = (a, b) => a + b
 console.log(sum(4, 5))
 console.log(sum())


 function sumAll(...all){
    console.log(all)
    let result = 0
    for (let num of all) {
       result += num
    }
    return result
 }

 const res = sumAll(1, 2, 3, 4, 5)
 console.log(res)