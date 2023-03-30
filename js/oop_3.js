'use strict'

/*
    Статические методы - это
    методы прикрепленные к конструктору
    (все объекты не наследуют метод)
*/

const Person = function (firstName, birthYear) {
    // Instance properties - свойства экземпляра
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.highFive = function () {
    console.log('High five!')
}

Person.highFive()

const jack = new Person('Jack', 1999)
// jack.highFive() так нельзя

class Person1 {
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

    static highFive() {
        console.log('High five!')
    }
}

Person1.highFive()