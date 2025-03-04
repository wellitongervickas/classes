// const obj = Object.create(null);

// const obj  = {
    // 1: true,
    // key: 'value',
    // [Symbol.iterator]: 'iterator',
    // rafael() {}
// }

// console.log(obj)

// obj.key = 'new value'

// console.log(obj)

// obj.newKey = 'new key'

// console.log(obj)

// delete obj.key

// console.log(obj)

// obj.newFunction = function() {}

// console.log(obj)

// obj[2] = 'two'

// console.log(obj)

// /// JSON - JavaScript Object Notation

// obj.subObj = {
//     key: 'subvalue',
//     subSubObj: {
//         key: 'subsubvalue'
//     }
// }

// console.log(obj)

/// recursive code ]

// const car = { 
//     make: "Toyota", 
//     model: "Camry",
//     year: 2020,
//     print: function () {
//         console.log("FUNC2: "+ this.make + " " + this.model);
//         console.log('year:', this.year)
//     },
//     print2: function () {
//         console.log("FUNC23: "+ this.make + " " + this.model);
//     },
// };

// function print3(car) {
//  console.log("FUNC3: "+ car.make + " " + car.model);
//  return newCar
// }

// function print3() {
//     console.log("FUNC3: "+ this.make + " " + this.model);
// }

// for (var prop in car) {
//     if (typeof car[prop] === "function") {
//         console.log('FUNC PROP: ', prop)
//         car[prop]();
//     } else {
//         console.log(prop + ": " + car[prop]);
//     }
    
// }

// print3.bind(car)()

// function printObj() {
//     console.log(this.key)
// }

// const newPrintObjFunction = printObj.bind(obj)
// newPrintObjFunction()
// printObj.bind(obj)()

// printObj.call(obj)

// printObj()

// console.log(printObj.prototype.)



// console.log(obj)



// function printObj() {
//     console.log(this.key)
// }

// obj.printer = printObj

// obj.printer()


// class Obj2 {
//     constructor() {
//         this.key = 'value'
//     }

//     printObj() {
//         console.log(this.key)
//         this.getMyName()
//     }

//     getMyName() {
//         console.log('printer')
//     }
// }

// const obj2 = new Obj2()


// obj2.printObj()

// Obj2.prototype.getMyName = function() {
//     console.log('prototype printer')
// }

// Obj2.test = function() {}

// obj2.printObj()

// console.log(obj2.test)


// function Obj3() {
//     this.key = 'value'

//     this.printObj = ()=> {
//         console.log(this.key)
//         this.getMyName()
//     }

    // this.getMyName = () => {
    //     console.log('printer')
    // }
// }

// const obj3 = new Obj3()

// Obj3.prototype.getMyName = function() {
//     console.log('prototype printer')
// }

// obj3.printObj()




// class Obj4 {
//     static test = true

//     printTest() {
//         console.log(Obj4.test)
//     }
// }


// const myObj = new Obj4()
// myObj.printTest()


// console.log(Obj4.test)


// const myArray = new Array([1,2,3])

// myArray.push(4)

// myArray.push = function(item) {
//     const currentValues = this
//     this = [...currentValues, item] 
//     return this.length
// }


// Array.isArray(myArray) /// true
/// fake implementation of Array.isArray
// const Array_2 = {
//     isArray: function(array) {
//         return array instanceof Array
//     }
// }
// const result = Array_2.isArray(myArray)
// console.log(result)
// class Array {
//     static isArray(array) {
//         return array instanceof Array
//     }
// }


// function myFunction() {
//     console.log(this)
// }

// myFunction.call({
//     myKey: 'My value'
// })


/// arrow function ( dont work)
// const myFunction2 = () => {
//     console.log(this)
// }

// myFunction2.call({
//     myKey: 'My value 2'
// })


// function myFunction3() {
//     console.log(this.myKey)

//     const myFunction4 = function() {
//         // console.log(`value - ${this.myKey}`)
//         console.log(this)
//     }

//     myFunction4.call({
//         ...this, /// spread operator
//         myKey: 'My value 4'
//     })
// }

// myFunction3()

// myFunction3.call({
//     myKey: 'My value 3',
//     test: 'true'
// })


// const objSpreed = {
//     ...obj,
// }


// const arraySpread = [
//     ...myArray
// ]


const car = {
    make: 'Toyota',
    model: 'Camry',
    color: 'blue'
}


const newCar = {
    ...car,
    year: 'red'
}

const brandNewCar = {
    ...newCar,
    color: 'green',
    year: '2021'
}

console.log(brandNewCar)

// class MyClass extends MyOtherClass {

// }