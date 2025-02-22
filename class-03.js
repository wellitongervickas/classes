// 10 / 0  = Infinity
Number('hello') /// NaN


// let a = 10 

/// ++ = a + 1
/// -- = a - 1



// let b = ++a - --a // 1

// +a

// 1 = operation  a  + 1 = 11
// 

let a = true
const b = false

if (0 > 1) {
    /// pass
}


const isAEqualAsB = a && b /// EXPRESSION = false

// a =  2

if (isAEqualAsB) {
    /// 1
} else {
    /// 2
}

if (false) {
///
} if (false) {
///
} if (false) {
///
}


if (false) {
///
} if (false) {
///
} if (false) {
///
} else {
/// here...
}



// const account = 3; /// Business account
// let isAccountAllowed = false

// switch (account) {
//     case 1:
//         console.log("Checking account");   // => Checking account
//         break;
//     case 2:
//         console.log("Savings account");    // => Savings account 
//         break;
//     case 3: /// 
//         isAccountAllowed = true
//         break;
//     default:
//         console.log("Invalid account code");
//         break;
// }


const result = {
    [1]: 'Checking account',
    [2]: 'Savings account',
    [3]: 'Business account', 
}[account]

let isAccountAllowed = !!result || false




let account = 5
let expectedAccountType = 5

const typesOfAccount = {
    [1]: 'Checking account',
    [2]: 'Savings account',
    [3]: 'Business account',
    [0]: 'Invalid account code'
}


const resultOfAccount = typesOfAccount[account] || typesOfAccount[0] 
const expectedAccountValue = typesOfAccount[expectedAccountType] || typesOfAccount[0]


if (resultOfAccount === expectedAccountValue) {
    /// 1
} else {
    /// 2
}
