// for লুপ array এলিমেন্ট গুলোকে এক এক করে আউটপুট দেখায়
const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < count.length; i++) {
    const ele = count[i];
    console.log(ele);
}

// while লুপ ভ্যারিয়েবলকে while কন্ডিশনে রেখে তার ভিতর সেই ভ্যারিয়েবলটা ইনক্রিমেন্ট হবে নাকি ডি-ক্রিমেন্ট হবে তা সেট করে দিয়ে আউটপুট দেখায়।
let num = 1;
while (num <= 10) {
    num += 2;
    console.log(num)
}

const obj = {
    name: "shuvo",
    isStudent: true,
    Passionate: 'Programmer',
    Job: "Soft Tech LTD.",
    Salary: 15000
};

const arrObj = [{
    name: "shuvo",
    isStudent: true,
    Passionate: 'Programmer',
    Job: "Soft Tech LTD.",
    Salary: 15000
},
    {
        name: "shuvo",
        isStudent: true,
        Passionate: 'Programmer',
        Job: "Soft Tech LTD.",
        Salary: 15000
    },
    {
        name: "shuvo",
        isStudent: true,
        Passionate: 'Programmer',
        Job: "Soft Tech LTD.",
        Salary: 15000
    },
    {
        name: "shuvo",
        isStudent: true,
        Passionate: 'Programmer',
        Job: "Soft Tech LTD.",
        Salary: 15000
    }
]

// for of লুপ শুধু মাত্র array এর উপর লুপ চালানো হয়
for (const person of arrObj) {
    console.log(person);
}

// for in লুপ শুধু মাত্র object এর উপর লুপ চালানো হয়
for (const person in obj) {
    if (Object.hasOwnProperty.call(obj, person)) {
        const ele = obj[person];
        console.log(ele);
    }
}