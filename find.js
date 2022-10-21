const number = [24, 45, 74, 89, 90, 32, 95]
// array এর এলিমেন্ট গুলো থেকে শর্ত সাপেক্ষে যে এলিমেন্ট প্রথমে শর্ত পূরন করবে সেটা রেজাল্ট হিসাবে দেখাবে নাকি গুলো আর দেখাবে নাহ।
const findNumber = number.find(num => num < 40);

console.log(findNumber);