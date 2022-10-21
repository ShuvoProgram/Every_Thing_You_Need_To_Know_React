const arrNum = [1, 2, 3, 4]
// স্প্রেড অপারেটর হচ্ছে প্রিভিয়াস array কে নতুন array এর মধ্যে যুক্ত করা। ...arrNum দিলে ঐ array তে থাকা সকল এলিমেন্ট অন্য কোনো ভ্যারিয়েবলে সেট করা যায়।
const newArray = [74, 89, ...arrNum, 25, 15, 45];
console.log(newArray);
// এখানে ...number দিয়ে নতুন ভ্যারিয়েবলে সেই এলিমেন্ট গুলো সেট করে তার মধ্যে থেকে যে সংখ্যাটি বড় সেটা বের করেছি।
const number = [10, 20, 30, 40, 50, 60, 70, 80];
const largest = Math.max(...number);
console.log(largest);