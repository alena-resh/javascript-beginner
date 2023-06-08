// Даны три неубывающих массива чисел. Найти число, которое присутствует во всех трех массивах.

// Input: [1,2,4,5], [3,3,4], [2,3,4,5,6]
// Output: 4

let arr1 = [1,2,4,5];
let arr2 = [3,3,4];
let arr3 = [2,3,4,5,6];

let i = 0;
let j = 0;
let k = 0;

for (i=0; i <= arr1.length - 1; i++) 
{
    for (j=0; j <= arr2.length - 1; j++)
    {
        if (arr1[i] == arr2[j])
        {
            for (k=0; k <= arr3.length - 1; k++)
            {
                if (arr2[j] == arr3[k])
                 {
                    console.log(arr3[k])
                 }
            }
        }
    }
}