// আমরা যদি শুধু একটা কন্ডিশনের আউটপুট দেখতে চাই তাহলে if এর ভিতর কন্ডিশন চালিয়ে যদি সত্য হয় তাহলে ভিতরের কনসোল লগ টাকে আউটপুট দেখাবে। আর যদি মিথ্যা হয় তাহলে কিছু দেখাবে নাহ।
const isNum = 20;
if(isNum > 15){
    console.log("I Love You!!!")
}

// যদি আমরা একটা কন্ডিশন সত্য হলে তার ভিতরের আউটপুট দেখাবে আর যদি মিথ্যা হয় তাহলে কোনো কিছু একটা রিটার্ন করে দেখাবে। if এর কন্ডিশন সত্য হলে তার ভিতরের আউটপুট দেখাবে না হলে else এর ভিতরের আউটপুট দেখাবে।
const isCar = 2;
const isJob = true;
const salary = 50000;
const isGraduation = true;

if(isGraduation === true && isJob === true && salary > 40000){
    console.log("Will You Marry Me !!! Sweetheart")
} else {
    console.log("Try To Hard Work......")
}

// আবার একাধিক লজিক ব্যবহার করতে হলে else-if দিতে হবে। যদি প্রথম শর্ত পূরন হলে এর ভিতরের রেজাল্ট দেখাবে আর যদি না হয় তাহলে দ্বিতীয় শর্ত পূরন হলে তার ভিতরের রেজাল্ট দেখাবে তাও যদি না হয় তাহলে পরবর্তী শর্ত চেক করবে যদি সেটা হয় তাহলে সেটার ভিতরের রেজাল্ট দেখাবে।

const mark = 60;

if(mark >= 80){
    console.log("A+")
} else if(mark >= 75){
    console.log("A")
} else if(mark >= 70){
    console.log("A-")
} else if(mark >= 65){
    console.log("B")
} else {
    console.log("Try to more then study.....")
}