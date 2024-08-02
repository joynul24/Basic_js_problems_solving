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

