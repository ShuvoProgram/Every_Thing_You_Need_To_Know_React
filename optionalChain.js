const person = {
    name: 'Shuvo',
    isStudent: true,
    profession: "Web Developer",
    position: "Junior",
    salary: 15000
}

// optional Chain হচ্ছে অনেকটা if-else এর মত যদি সত্য হয় তাহলে এর ভিতরের ভ্যালিড আউটপুট দেখাবে আর যদি মিথ্যা হয় তাহলে No name output দেখাবে। ? দ্বারা if বুঝায় আর : দ্বারা else বুঝায়।
const optionalChain = `${person.name ? person.name : "No name output."}`;

console.log(optionalChain);