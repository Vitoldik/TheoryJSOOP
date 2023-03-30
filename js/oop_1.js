'use strict'
/*
    Классы ES6
 */

// Class expression
const Person0 = class {

}

// Class declaration
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    // Методы добавляются в свойство .prototype
    printAge() {
        console.log(new Date().getFullYear() - this.birthYear)
    }

    greet() {
        console.log(`Hello! My name is ${this.firstName}`)
    }
}

const jack = new Person('Jack', 2000)
jack.printAge()
console.log(Object.getPrototypeOf(jack) === Person.prototype) // true

// Person.prototype.greet = function () {
//     console.log(`Hello! My name is ${this.firstName}`)
// }

jack.greet()

/*
    1. Классы не "поднимаются" при помощи hoisting (нельзя использовать до объявления)
    2. Классы являются "first class citizens" (можно передавать в функции и возвращать из функций)
    3. Тело класса выполняется в strict режиме
*/