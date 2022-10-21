const student = {
    name: 'shuvo khan',
    age: 24,
    subject: 'Computer Scinece'
}

// এখানে অবজেক্টের Keys গুলোকে নেওয়ার জন্য এই মেথড ব্যবহার করেছি।
const keys = Object.keys(student);
console.log(keys);
// এখানে অবজেক্টের value গুলোকে নেওয়ার জন্য এই মেথড ব্যবহার করেছি।
const values = Object.values(student);
console.log(values);