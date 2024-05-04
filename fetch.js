// create a noraml object
const student = {
    name: "Nayeem",
    age: 32,
    frientd: ['Nayeem', 'Dola', 'Asia', 'Shokal', 'Rasel'],
}
// console.log(student);

// object conver tho a json 
const objectToJson = JSON.stringify(student);
// console.log(objectToJson);

// JSON convert to a object
const jsonToObj = JSON.parse(objectToJson);
// console.log(jsonToObj);

// 2. fetch 
// fetch('url')
    // .then(res => res.json())
    // .then(data => console.log(data));

// keys and values form object
const studentKeys = Object.keys(student);
const studentValues = Object.values(student);

// for
const numbers = [23, 24, 25, 26, 27, 28, 29];

// numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// for in on object

// and adn remove from and array

const products = [
    {name: 'laptop', price: '3200', brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: '3600', brand: 'apple', color: 'black'},
    {name: 'soundbox', price: '2400', brand: 'sony', color: 'black'},
    {name: 'headphone', price: '300', brand: 'a4tech', color: 'white'},
    {name: 'camera', price: '200', brand: 'canon', color: 'black'},
]

const newProduct = {name: 'watch', price: '2200', brand: 'seiko 5', color: 'silver'}

// copy products array and add create an array for new data.
const newProducts = [...products, newProduct];
// console.log(newProducts);

// create a new array without an item
const withoutLaptop = newProducts.filter(data => data.name != 'laptop');
console.log(withoutLaptop);