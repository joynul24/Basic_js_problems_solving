// Task Number -1

// চিড়িয়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
// টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।

function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
        return 'Error: Invalid Number';
    }
    const totalTicketMoney = ticketSale * 120;
    const staffSalary = totalTicketMoney - 500;
    const staffLanceCost = 8 * 50;
    const BakiTaka = staffSalary - staffLanceCost;
    return BakiTaka;
}

// console.log(calculateMoney(-10));



// Task Number -2

// Problem-02: Good Name , Bad Name
// ⚠️ Function Name Must be checkName()

// সালমান ভাই ও রাশেদা ভাবীর ক োল জুড়ে এসেছে একটা পুত্র সন্তান । সালমান ভাই পুত্র সন্তানের একটা ভাল ো নাম
// রাখতে চান । কিন্তু তাদের এলাকায় গ্রামের মানষুরা নাম কে ব্যাংগ করে উচ্চারন করে । যে মন কার ো নাম salman
// হলে তারা বলে সালমাইন্যা । কার ো নাম jafor হলে তারা বলে জাফইর্যা । সালমান ভাই চান না তার পুত্র সন্তান কে
// কেউ এভাবে ক্ষেপাক ।
// সালমান ভাই দেখতে পেলেন যে যাদের নামের শেষে a, y, i , e , o , u, w থাকে তাদেরকে আসলে ক্ষেপান ো
// যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনের নাম গুল োকে ব্যাংগ করে উচ্চারন করা যায় না ।
// এখন ত োমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লিখে দিতে হবে । যেটা একটা স্ট্রি ং
// ইনপুট নেবে । এবং ফাংশনটি চেক করে দেখবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রিটার্ন
// করবে Good Name আর নাম টি খারাপ হলে রিটার্ন করবে Bad Name


function checkName(name) {
    if (typeof name !== 'string' || name === 'number') {
        return 'Invalid';
    }
    const goodNameLetter = ['a', 'y', 'i', 'o', 'e', 'u', 'w'];
    name = name.trim().toLowerCase();
    const lastChar = name.charAt(name.length - 1);
    if (goodNameLetter.includes(lastChar)) {
        return 'Good Name';
    } else {
        return 'Bad Name';
    }
}

// console.log(checkName('joy'));
// console.log(checkName('John'));
// console.log(checkName('Ulysses'));
// console.log(checkName('RAFEE'));
// console.log(checkName(-2)); // invalid dekhabe





// Task Number -3

// ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হিসেবে একটি Array
// নেবে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
// elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রিটার্ন করতে হবে ।
// তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
// রি টার্ন করবে [ 1 , 12 , 0 , -1 ]


function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return 'Error: please provide an array';
    }

    const numbersArray = [];
    for (const item of array) {
        if (typeof item === 'number') {
            numbersArray.push(item);
        }
    }
    return numbersArray;
}

const mixedArray = [1, 'hello', 3.14, true, 42, 'world', null, undefined, 7];
// console.log(deleteInvalids(mixedArray)); 




// Task Number -4

// কলিমুদ্দিন সাহেব নতুন ফ োন কিনে বিভিন্ন ওয়ে বসাইটে ভিজিট করেন এবং বিভিন্ন এপ্লিকেশনে একাউন্ট ক্রিয়েট
// করেন । কিন্তু তিনি পাসওয়ার্ড মনে রাখতে পারেন না । তিনি এমন একটি ফাংশন চান, যে খানে তার ইনফরমেশন
// এবং ওয়েবসাইট নেম দিলে সেটা কলিমুদ্দিন সাহেবকে একটি মনে রাখার মত ো পাসওয়ার্ড জেনারেট করে দিতে
// পারবে ।

function password(info) {
    if (typeof info.name !== 'string' || typeof info.birthYear !== 'number' || typeof info.siteName !== 'string') {
        return 'Error: invalid'
    }
    else {
        return `${info.siteName}#${info.name}@${info.birthYear}`
    }
}

// const information = { name: "Afsana", birthYear: 1999, siteName: "google" };
// const information = { name: "Joynul", birthYear: 2002, siteName: "Facebook" };
// const information = { name: "toky", birthYear: 200, siteName: "Facebook" };
// console.log(password(information));





// Task Number -5

// Problem 05 : Monthly Savings of a Freelancer
// ⚠️ Function Name Must be monthlySavings()
//ফ্রিল্যান্সার শাহেদ প্রতিমাসে বেশ কিছু পেমেন্ট ক্লায়েন্টদের থেকে পায় । কিন্তু পেমেন্ট এর কিছু ট্যাক্স পরিশ োধ
//এবং নিজের লিভি ংকস্ট এর কারনে সে সেভি ংস করতে পারে না । তার সেভি ংস এর হিসেব করার জন্যে তাকে
//monthlySavings() নামে একটি ফাংশন তৈরী করে দিতে যেটা ইনপুট হিসেবে নেবে একটি Array(প্রতি মাসে
//পাওয়া সকল পেমেন্ট) এবং একটি Number(শাহেদের লিভি ং কস্ট) ।
// শাহেদের যে সকল পেমেন্ট 3000 টাকা বা তার বেশি সে সকল পেমেন্ট থেকে ব্যাংক Tax হিসেবে ২০% টাকা কেটে
// নেয় । এখন ম োট ইনকাম থেকে Tax গুল ো বাদ দিয়ে এবং Living cost বাদ দিয়ে বাকী যে টাকা থাকে সেটাই
// হল ো শাহেদের সেভি ংস । অর্থাৎ ফাংশন টি শাহেদের সেভি ংস কে রিটার্ন করবে । যদি সেভি ংস করার মত ো টাকা না
// থাকে অর্থাৎ সেভি ংস এর ভ্যালুযদি ০ এর চেয়ে কম হয় তাহলে ফাংশন টি রিটার্ন করবে একটি স্ট্রি ং তাহল ো “earn
// more” ।


const salary = [ 6000, 5000, 9000];
// const salary = [ 9000 , 20000 , 3400];
// const livingCost = 5000;
const livingCost = 10000;

function monthlySavings(array, livingCost) {
    let savings = 0;
    for (const number of array) {
        if (number >= 3000) {
            const taxFee = number - 600;
            const remaining = taxFee - livingCost;
            savings += remaining;
        }
    }
    if(savings < 0){
        return 'earn more'; 
    }
    return savings;
}

// console.log(monthlySavings(salary, livingCost));