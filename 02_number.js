// 1. Number

// const num = 42 // int
// const float = 42.42 //float
// const pow = 10e3 // 
// console.log(num)
// console.log(pow)

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('1/0', Number.POSITIVE_INFINITY)

// console.log(Number.NaN)
// console.log (typeof NaN) // number

// console.log(Number.isNaN(1))
// console.log(Number.isFinite(Infinity))

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2) // парсим строковое значение => 42
// console.log(Number(stringInt) + 2)

// console.log(parseFloat(stringFloat) + 2) // => 42.42

// console.log(0.4 + 0.2) // 0.6000000000001
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // 0.6


// 2. BigInt

// console.log(typeof 90071992547409919999n) // bigint - оперировать с числами больше max integer
// console.log(90071992547409919999n - 900719925474099199999n)

// console.log(10n - 4) // error

// console.log(parseInt(10n) - 4)
// console.log(parseInt(10n - BigInt(4)))

// // 3. Math
// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.sqrt(25)) //  возвести в квадрат
// console.log(Math.pow(5, 10)) //  в степень
// console.log(Math.abs(-42)) // 42

// console.log(Math.max(25, 33, 1, 555))
// console.log(Math.floor(4.9)) // в меньшую сторону округление
// console.log(Math.ceil(8.9)) //  в большую сторону округление

// 4. Example

// f возвращает специальное число из диапазона

function getRandonBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandonBetween(10, 42))