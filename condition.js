// এখানে ১০ থেকে ২০ বড় তাই false রিটার্ন করবে।
// বড় > ছোট
const isBig = 10 > 20;
// console.log(isBig);

// এখানে ১০ ছোট এবং ২০ বড় তাই সত্য রিটার্ন করবে।
const isSmall = 10 < 20;
// console.log(isSmall);

// যদি প্রথম সংখ্যা থেকে দ্বিতীয় সংখ্যা যদি সমান হয় তাহলে সত্য আর যদি বড় হয় তাহলে মিথ্যা রিটার্ন করবে।
const isEqualOrBig = 10 >= 11;
console.log(isEqualOrBig);

// যদি প্রথম সংখ্যা থেকে দ্বিতীয় সংখ্যা সমান বা বড় হয় তাহলে সত্য রিটার্ন করবে।
const isEqualOrSmall = 12 <= 11;
// console.log(isEqualOrSmall);

// যদি প্রথম সংখ্যা আর দ্বিতীয় সংখ্যা একই হয় তাহলে সত্য হবে। তবে এখানে type conversition চেক করবে নাহ।
const doubleEqual = 20 == "20";
// console.log(doubleEqual);

// যদি দুইটি সংখ্যা একই হয় তাহলে মিথ্যা দেখাবে আর যদি প্রথম টার থেকে আলাদা সংখ্যা হয় তাহলে সত্য দেখাবে।
const notEqual = 20 != 21;
// console.log(notEqual);

// এখানে দুইটা সংখ্যা চেক করে দেখবে সমান কি না যদি সমান হয় তাহলে সত্য তবে এর সাথে type conversition ও চেক করবে যদি এক হয় তাহলে সত্য রিটার্ন করবে।
const tripleEqual = 20 === "20";
// console.log(tripleEqual);

// যদি দুইটি সংখ্যা একই হয় তাহলে মিথ্যা দেখাবে আর যদি প্রথম টার থেকে আলাদা সংখ্যা হয় তাহলে সত্য দেখাবে।
const notDoubleEqual = 20 !== 21;
// console.log(notDoubleEqual);

// যদি দুইটা শর্তই ফুলফিল হয় তাহলে কনসোল লগ দেখাবে। আর যদি না হয় তাহলে দেখাবে নাহ।
const doubleAnd = 20 > 10 && 10 < 20;
// console.log(doubleAnd);

// যদি দুইটা শর্তের যেকোনো একটা শর্ত ফুলফিল হয় তাহলে কনসোল লগ দেখাবে।
const Or = 20 < 10 || 20 === 20;
// console.log(Or);