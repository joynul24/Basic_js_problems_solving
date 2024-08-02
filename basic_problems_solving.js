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
console.log(deleteInvalids(mixedArray));
