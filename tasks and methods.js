// Даны три неубывающих массива чисел. Найти число, которое присутствует во всех трех массивах.

// Input: [1,2,4,5], [3,3,4], [2,3,4,5,6]
// Output: 4

// let arr1 = [1,2,4,5];
// let arr2 = [3,3,4];
// let arr3 = [2,3,4,5,6];

// let i = 0;
// let j = 0;
// let k = 0;

// for (i=0; i <= arr1.length - 1; i++) 
// {
//     for (j=0; j <= arr2.length - 1; j++)
//     {
//         if (arr1[i] == arr2[j])
//         {
//             for (k=0; k <= arr3.length - 1; k++)
//             {
//                 if (arr2[j] == arr3[k])
//                  {
//                     console.log(arr3[k])
//                  }
//             }
//         }
//     }
// }

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);


// The Array.isArray() static method determines whether the passed value is an Array.

console.log(Array.isArray([1, 3, 5]));


// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));


// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array2 = [1, 2, 3];

console.log(array2.includes(2));


// The forEach() method executes a provided function once for each array element.

const array3 = ['a', 'b', 'c'];

array3.forEach(element => console.log(element));


const words = ['hello', 'bird', 'table', 'football', 'pipe', 'code'];
const capWords = words.forEach(capitalize);
 
function capitalize(word, index, arr) {
  arr[index] = word[0].toUpperCase() + word.substring(1);
}
console.log(words);


// Here is an example of how we can write a program with for loop and with forEach().

const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

// using for loop
for (let i = 0; i < arrayItems.length; i++) {
  copyItems.push(arrayItems[i]);
}

console.log(copyItems);


let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item, index, arr) {

    // adding strings to the array elements
    arr[index] = 'Hello ' + item;
}

console.log(students);


// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array11 = ['a', 'b', 'c'];
const array22 = ['d', 'e', 'f'];
const array33 = array11.concat(array22);

console.log(array33);


// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());


// The push() method adds the specified elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
console.log(animals);

animals.push('chickens', 'cats', 'dogs');
console.log(animals);


// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const array4 = [1, 2, 3];

const firstElement = array4.shift();

console.log(array4);


// [2,7,11,15], target = 9 => return indecies

var twoSum = function(nums, target) {
  for (var i=0; i < nums.length; i++){
      for (var j=i + 1; j < nums.length; j++){
          if (nums[i] + nums[j] === target){
              return [i, j];
          }
      }
  }
};

// var a = 5; //число
// a = String(a);//преобразует переменную а в строку
// console.log(a)

// var a = "111"; //число
// a = Number(a);//преобразует переменную а в строку
// console.log(a)


// Пирожок в столовой стоит a рублей и b копеек. Определите, сколько рублей и копеек нужно заплатить за n пирожков.

let a = 10 // rub
let b = 50 // penny
let n = 3 // count

whole_price_penny = (a * 100 + b) * n
rub = Math.floor(whole_price_penny/100)
pennies = whole_price_penny % 100

console.log(`The cost of ${n} buns: ${rub} rub ${pennies} cents`)




const array5 = [1,2,3,4,5,5,5,6,7,8]
let y = 0

for (y=0; y<=array5.length-3; y++)
{
   if (array5[y]==array5[y+1])
   {
    if(array5[y+1]==array5[y+2])
    {
     console.log(true)
    }
   }
}

var text = 'here is my text'
var x = 'e'
let counting = 0

const array6 = text.split('')

let z = 0
for (z=0; z<=array6.length-1; z++)
{
if (array6[z]==x)
   {
    counting++
   }
}
console.log(counting)