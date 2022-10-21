// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
// array তে একটা অবজেক্ট এলিমেন্টকে যোগ করতে হলে ... সেই array তার সাথে newArray কে add করে দিতে হবে।
const newProduct = {name: 'webcam', price: 2000, brand: 'lal sing chadda', color: 'red'};
// add product
const addProduct = [...products, newProduct];
// console.log(addProduct);
// array এর এলিমেন্টের ডিলিট করতে চাইলে আমরা এই মেথড ব্যবহার করবো।
// remove product
const removeProduct = products.filter(p => p.name != 'laptop');
console.log(removeProduct);