// common.js
// function sayHello(name) {
//   console.log(`Hello ${name} !`)
// }
// function sayGoodbye(name) {
//   console.log(`Goodbye ${name} !`)
// }
//
// module.exports.sayHello = sayHello
// exports.sayGoodbye = sayGoodbye

let common = {
    sayHello(name) {
        console.log(`Hello ${name} !`)
    },
    sayGoodbye(name) {
        console.log(`Goodbye ${name} !`)
    }
}

export  default common