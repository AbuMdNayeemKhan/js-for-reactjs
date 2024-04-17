// 1. How to declar a variable using let and const
const fathersName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. Basic of condition: >, <. ===, !==, <=, >=
// Multiple conditions: &&, ||
if(1 === 'one'){

}else {

}

// 3. Array declare
// index,
// length, push,

const numbers = [10, 43, 25, 65, 67];
numbers[2] = 22;
numbers.length; 

// 4. for loop
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// 5. fnction
let mul = (num1, num2) => {
    let result = num1 * num2;
    return result;
}
const output = mul(22, 44);
console.log(output);

// 6. object
// 3 watys to access property by name
const student = {
    name: "Nayeem",
    age: 32,
    frientd: ['Nayeem', 'Dola', 'Asia', 'Shokal', 'Rasel'],
}
console.log(student.frientd[1]);