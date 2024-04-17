// create a noraml object
const student = {
    name: "Nayeem",
    age: 32,
    frientd: ['Nayeem', 'Dola', 'Asia', 'Shokal', 'Rasel'],
}
console.log(student);

// object conver tho a json 
const objectToJson = JSON.stringify(student);
console.log(objectToJson);

// JSON convert to a object
const jsonToObj = JSON.parse(objectToJson);
console.log(jsonToObj);