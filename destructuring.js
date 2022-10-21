const person = {
    name: 'Shuvo',
    isStudent: true,
    profession: "Web Developer",
    position: "Junior",
    salary: 15000
}
// অবজেক্ট এর কোনো একটা প্রোপার্টিকে যদি বাহিরে আনতে চাই তাহলে ডিস্ট্রাকচারিং করতে হবে।
const {name} = person;
console.log(name);

// array এর কোনো একটা প্রোপার্টিকে যদি বাহিরে আনতে হয় তাহলে ডিস্ট্রাকচারিং করতে হবে। এখানে array এর প্রথম এলিমেন্টকে নিতে আমরা ডিস্ট্রাকচারিং করেছি মনে রাখতে হবে array থেকে প্রোপার্টিকে আনতে হলে প্রথম ডিস্ট্রাকচারিং ভ্যারিয়েবল শুধু প্রথম ভ্যালুকেই নিবে।
const arr = ['great', 'medium', 'looser']

const [balance] = arr;

console.log(balance)