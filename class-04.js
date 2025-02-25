// const obj = {}
// const array = []
// const string = ''
// const bool = false
// const int = 1
// const float = 1.5

// let accumulator = 0;
// let counter = 1;

// while (counter <= 50) {     // -- condition
//     accumulator += counter;         // -- body
//     counter++;              // -- updater
// }

// console.log("Sum = " + sum);  // => Sum = 1275

// let accumulator = 0;
// let counter = 50;

// while (counter >= 0) {     // -- condition
//     accumulator += counter;         // -- body
//     counter--;              // -- updater
// }

// console.log("accumulator = " + accumulator);  // => Sum = 1275

// let accumulator = 0;

// /// 1 - define variable
// /// 2 - expression of condition
// /// 3 - increment of variable
// for (let counter = 1; counter <= 50; counter++) {
//     accumulator += counter;
// }

// console.log("accumulator = " + accumulator);    // => Sum = 1275


// let accumulator = 0;

// /// 1 - define variable
// /// 2 - expression of condition
// /// 3 - decrement of variable
// for (let counter = 50; counter >= 0; counter--) {
//     accumulator += counter;
// }

// console.log("accumulator: " + accumulator);    // => Sum = 1275

// let student = { name: "Bill", age: 25, degree: "Masters" };
// student.age /// bill
// student['name']
// student.degree
/// eg: item = key <=== stundent

// for (let item in student) {
//     // console.log(item) // <-- 1° name
//     console.log(`${item}:${student[item]}`);     
// }

// let student = { name: "Bill", age: 25, degree: "Masters" };

// Object.keys(student).forEach((item) => {
//     console.log(`${item}:${student[item]}`)
// })

// const arrayOfValues = Object.values(student) /// 3

// ['Bill',25,'Masters'][2]

// for (let counter = 0; counter <= arrayOfValues.length - 1; counter++) {
//     console.log(`${counter}:${arrayOfValues[counter]}`)
// }

// let student = { name: "Bill", age: 25, degree: "Masters" };
// let studentAsList = Object.keys(student)

// for (let value of studentAsList) {
//     console.log(`${value}:${student[value]}`)
// }

// var sum = 0;

// for (var i = 1; i <= 10_000; i++) {
//     sum += i;
//     if (i === 50) {
//         break;    // immediately transfers control outside the for block
//     }
// }


// console.log("Sum = " + sum);       // => Sum = 1275

// var number = 1;
// var sum = 0;
// while (true)    // equivalent to for ( ; ; ), called 'forever' loop
// {
//     sum += number;
//     if (number === 50) {
//         break;  // immediately transfers control outside while block
//     }
//     number++;
// }

// console.log("Sum = " + sum);       // => Sum = 1275    

for (var i = 1; i <= 50; i++) {

    /// 6 / 2 = 0.5
    if ((i % 2) != 0) {
        continue; /// continue to next iteration
    }

    console.log(i);     // => 2, 4, 6, 8, 10
}
