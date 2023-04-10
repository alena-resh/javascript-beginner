// String

// const name = 'Alena'
// const age = 25

// const output = 'Hi, I am ' + name + ' and my age is ' + age + ' years.'
// const output = `Hi, my name is ${name} and my age is ${age}`
// console.log(output)

// const output = `
// <div> This is div <div>
// <p> this is paragraph <p>
// `
// console.log(output)

// const name = 'Alena'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.repeat(3))
// console.log(name.chartAt(2))

//const string = '    pswd'
//console.log(string.trim()) // trim - удаляет пробелы
//console.log(string.trimLeft())
//console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
      age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
  }
  
  const personName = 'Alena'
  const personName2 = 'Evgeniy'
  const personAge = 26
  const personAge2 = -10
  
  const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
  const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
  
  console.log(output)
  console.log(output2)