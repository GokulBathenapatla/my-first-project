// reduce if you have  mutliple values in array then we will use reduce method why beacause of it will reduce the length of the array by adding the numbers.
//let numbers =[20, 30, 3, 17, 29];
//let sum = numbers.reduce((Total, number) =>{
  //  return Total + number ;

//});
//console.log(sum)//start with zero like 0+ 20 =20 //20 + 30 =50 // 50 + 3 = 53// 53 + 17 =69 like that it will reduce the array.
//it will reduce the many values in the array it will give you one final result.

// another method  finding highest number 
let numbers = [10, 50, 3, 80];

let lowest = numbers.reduce((min, number) => {
    return number < min ? number : min;
}, numbers[0]);

console.log(lowest);// it will check 50 < 10 wrong like this it will check all the numbers if it not get least number it 
//it will print in the array which is least number.  

