'use strict'

/*
    Getters and Setters
*/

const account = {
    owner: 'youra',
    transition: [300, 500, -100, 600],

    get lastTransaction() {
        return this.transition.slice(-1).pop();
    },

    set lastTransaction(trans) { // Может иметь только 1 параметр
        this.transition.push(trans)
    }
}

console.log(account.lastTransaction)
account.lastTransaction = 100 // Вызов сеттера

class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName // При создании будет запущен setter
        this.birthYear = birthYear
    }

    // Методы добавляются в свойство .prototype
    printAge() {
        console.log(new Date().getFullYear() - this.birthYear)
    }

    greet() {
        console.log(`Hello! My name is ${this.fullName}`)
    }

    get age() {
        return new Date().getFullYear() - this.birthYear
    }

    // Установить значение в уже существующее свойство
    set fullName(fullName) {
        if (fullName.includes(' ')) {
            this._fullName = fullName // если сеттер вызывается из конструктора добавляем _
            return
        }

        alert('Необходимо ввести полное имя!')
    }

    get fullName() {
        return this._fullName
    }
}

const jack = new Person('Jack White', 2000)
console.log(jack.age)
console.log(jack.fullName)

const test = new Person('Test', 2001)
console.log(test.fullName) // undefined