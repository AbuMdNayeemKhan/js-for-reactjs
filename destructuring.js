// 1. array destructuring
let numbers = [11, 22, 33];
// [num1, num2, num3] = [11, 22, 33];
const [num1, num2, num3] = numbers;
const student = {
    name: "Nayeem",
    age: 32,
    frientd: ['Nayeem', 'Dola', 'Asia', 'Shokal', 'Rasel'],
};
const [f1, f2, f3, f4, f5] = student.frientd;
console.log(f2);

//object destructuring
const {name, age} = student;
console.log(name);