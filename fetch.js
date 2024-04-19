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

// 2. fetch 
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// keys and values form object

const studentKeys = Object.keys(student);
const studentValues = Object.values(student);