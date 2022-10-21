
// default প্যারামিটার মূলত ব্যবহার করা হয় যখন কোনো প্যারামিটারের ইনিশিয়াল মান সেট করতে হয় তখন।
const common = (a, b, c = 2) => {
    const sum = a + b +c;
    return sum;
}

const result = common(2, 2)
console.log(result);