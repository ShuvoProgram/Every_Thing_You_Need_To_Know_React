let arr = ['aam', 'jam', 'lichu', 'kathal'];

// Array তে কত গুলো আইটেম আছে তা জানতে length মেথড ব্যবহার করা হয়
let arrLength = arr.length;
console.log(arrLength);

// Array তে কোনো একটা ইনডেক্সকে খুজতে [1] ব্যবহার করা হয় আমরা জানি array মূলত 0 ইনডেক্স থেকে শুরু হয়
let arrIndex = arr[1];
console.log(arrIndex);

// Array তে কোনো আইটেম যোগ করতে হলে push ব্যবহার করা হয় তাহলে সেটা লাস্টে আইটেম যোগ হবে।
const arrPush = arr.push("Peyara");
console.log(arr);

// Array তে লাস্ট আইটেম রিমুভ করতে pop মেথড ব্যবহার করা হয়
const arrPop = arr.pop();
console.log(arr);

// Array এর মধ্যে কোনো একটা আইটেম কত নাম্বার ইনডেক্স এ আছে তা জানতে চাই তাহলে indexOf মেথড ব্যবহার করবো
const arrIndexOf = arr.indexOf("jam");
console.log(arrIndexOf);

// Array এর ভিতরে সার্চকৃত আইটেম আছে কি না তা জানতে includes মেথড ব্যবহার করবো
const arrIncludes = arr.includes("kathal");
console.log(arrIncludes);

// Array মধ্যে কোনো এলিমেন্টকে ভাগ করতে চাইলে slice মেথড ব্যবহার করবো। slice(শুন্য ইনডেক্স থেকে, কত নাম্বার ইনডেক্স পর্যন্ত রাখতে চাই)
const arrSlice = arr.slice(0, 2);
console.log(arrSlice);

// Array মধ্যে কোনো এলিমেন্টকে ভাগ করতে চাইলে spilce মেথড ব্যবহার করবো। splice(শুন্য ইনডেক্স থেকে, কত নাম্বার ইনডেক্স পর্যন্ত রাখতে চাই)
const arrSplice = arr.splice(0, 2);
console.log(arrSplice);

// Array মধ্যে কোনো একটা আইটেমকে প্রথম ইনডেক্সে যোগ করতে চাইলে shift মেথড ব্যবহার করব
const arrShift = arr.shift();
console.log(arrShift);

// Array মধ্যে কোনো একটা আইটেমকে প্রথম ইনডেক্সে রিমুভ করতে চাইলে unshift মেথড ব্যবহার করব
const arrUnShift = arr.unshift();
console.log(arrUnShift);

// Array এর এলিমেন্টগুলোকে এক সাথে যোগ বা বিয়োগ বা গুন মানে ম্যাথ অপারেশন করতে চাইলে reduce মেথড কলড ফাংশন ব্যবহার করতে পারি। এর কাজ হলো পূর্বের এলিমেন্টকে বর্তমানের এলিমেন্টের সাথে ম্যাথ অপারেশন করা।
const numArr = [1, 2, 3, 4];
const initialValue = 1;

const arrReduce = numArr.reduce((previouseValue, currentValue) => previouseValue + currentValue, initialValue);

console.log(arrReduce);