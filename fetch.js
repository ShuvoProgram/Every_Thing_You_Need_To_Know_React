const url = 'https://google.com';
// fetch দিয়ে ওয়েবসাইটের ডাটা কে আনা যায় তার পর সেই প্রাপ্ত ডাটাকে আমরা বিভিন্ন কাজে লাগাই।
fetch(url)
.then(res => res.json()) // .then দিয়ে ডাটাগুলো ওপর প্রমিজ ফাংশন চালাচ্ছি যতক্ষন না সে ডাটা পুরোপুরি লোড হচ্ছে ততক্ষন সে ওয়েট করবে।
.then(data => console.log(data))