'use strict';

/*
    Функции конструкторы называются с большой буквы
    Стрелочные функции не работают как функция конструктор (нет доступа к this)
*/
const Person = function (firstName, birthYear) {
    // Instance properties - свойства экземпляра
    this.firstName = firstName
    this.birthYear = birthYear

    // Никогда этого не делать
    // this.printAge = function () {
    //     console.log(new Date().getFullYear() - this.birthYear)
    // }
}

const test = new Person('Test', 1990) // вызов функции конструктора

console.log(test)
/*
    1. Создается новый пустой объект {}
    2. Вызывается функция, this = {}
    3. {} связывается с прототипом
    4. Созданный объект автоматически возвращается {}
 */

const mary = new Person('Mary', 2000)

console.log(mary instanceof Person)

/*
    Прототипы
*/
console.log(Person.prototype) // возвращает объект

Person.prototype.printAge = function () {
    console.log(new Date().getFullYear() - this.birthYear)
}

mary.printAge()

Person.prototype // прототип всех объектов которые будут созданы с помощью функции конструктора

console.log(mary.__proto__) // вывести прототип объекта

// Проверки на прототип
console.log(mary.__proto__ === Person.prototype)


console.log(Person.prototype.isPrototypeOf(mary)) // false так как Person prototype это прототип всех объектов которые будут созданы с помощью функции конструктора

Person.prototype.personClass = 'Mammal'
console.log(test, mary)

// проверить имеет ли объект свойство
console.log(mary.hasOwnProperty('birthYear')) // true
console.log(mary.hasOwnProperty('printAge')) // false так как свойство в прототипе

/*
    Прототипное наследование для встроенных объектов
*/

// Person.prototype
console.log(test.__proto__)

// Object.prototype - верхушка цепи прототипов
console.log(test.__proto__.__proto__)

// null
console.log(test.__proto__.__proto__.__proto__)

// Получение функции конструктора Person
console.dir(Person.prototype.constructor)

// Прототипы массивов
const numbers = [3, 4, 2, 5, 8, 8, 2, 2]
console.log(numbers.__proto__) // устаревший способ
console.log(Object.getPrototypeOf(numbers)) // новый способ
console.log(numbers.__proto__ === Array.prototype)

/*
    Добавляем новый метод в прототип массивов, пример исключительно для теста (плохая практика)
 */
Array.prototype.uniqueElements = function () {
    return [...new Set(this)]
}

console.log(numbers.uniqueElements())

const h2 = document.querySelector('h2')
console.dir(h2)