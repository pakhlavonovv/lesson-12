// 1 misol

// let arr = [1,2,3,4,456,4,6,7]
// let index = arr.indexOf(4)
// let new_arr = arr.filter((item)=> arr.indexOf(item) !== arr.lastIndexOf(item))
// console.log(new_arr)

// 2 misol

// let arr = [1,2,3,4,5]
// let new_arr = []
// for(let i = 0; i < arr.length; i++){
//     new_arr.push(Math.pow(arr[i], 2))
// }
// console.log(new_arr)

// 3 misol

// let arr = [ 1, -4, 12, 0, -3, 29, -150]
// let new_arr = arr.filter((item)=> item > 0)
// let result = new_arr.reduce((a,b) => a + b, 0)
// console.log(result)

// 4 misol

// let str = "George Raymond Richard Martin";
// let words = str.split("");
// let result = words.filter((item) => item == item.toUpperCase());
// console.log(result.join(""));

// 5 misol

// const isLetter = (str) => {
//     let arr = str.split('');
//     arr.forEach(item => {
//         if (!isNaN(item)) {
//             console.log(`${item} stringdagi so'zda hammasi xarfdan iborat`);
//         } else {
//             console.log(`${item} stringdagi so'zda hammasi xarfdan iborat emas`);
//         }
//     });

// }
// isLetter("Abdullox");

// 6 misol

// const strLength = (str) => {
//     let newStr = str.split(' ');
//     let arr = newStr.map(function (item) {
//         return item.length;
//     });
//     console.log(arr);
// }
// strLength("Men dasturlash");

// 7 misol

// const strIsLower = (str) => {
//     let newString = str.split("")
//     newString.forEach(item => {
//         if (item.includes(" ")) {
//             console.log(`${item} bosh joy`);
//         } else {
//             console.log(`${item} bosh joy mavjud emas`);
//         }
//     })
// }
// strIsLower("Hello");

// 8 misol

// let obj = {a:7, b:5, c:2}
// let arr = []

// for(let key in obj){
//     arr.push(`${key}${obj[key]}`)
// }
// console.log(arr)
