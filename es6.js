// 1. template string
const student = {
    name: "Nayeem",
    age: 32,
    frientd: ['Nayeem', 'Dola', 'Asia', 'Shokal', 'Rasel'],
}
const numbers = [10, 43, 25, 65, 67];
const about = `My Name is ${student.name} age of ${student.age} has number ${student.frientd[2]} also liked`;

// 2. arrow function
const arrFun = () => {

}

// 3. spread operator
//create a new array from an older array and add an element
const currentNum = [...numbers, 44];
numbers.push(99);
console.log(numbers);
console.log(currentNum);