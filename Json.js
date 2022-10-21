const student = {
    name: 'shuvo khan',
    age: 24,
    subject: 'Computer Scinece'
}
// ওয়েবসাইটের ডাটা গুলো সব সময় unreadable format এ থাকে সেগুলোকে readable করতে আমরা JSON ফরমেট ব্যবহার করি। JSON এ দুটি মেথড আছে stringify এবং parse। 

// stringify মূলত JSON অবজেক্ট গুলোকে " " এর মধ্যে KEYS এবং Value কে সেট করে।
const studentJson = JSON.stringify(student);
// parse মেথড মূলত stringify কে অবজেক্টে রূপান্তর করে।
const studentParse = JSON.parse(studentJson);

console.log(studentJson);
console.log(studentParse);