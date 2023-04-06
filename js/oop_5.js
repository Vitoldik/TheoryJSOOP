/*
    Наследование классов

    Есть 3 способа:
    1. Функции-конструкторы
    2. Классы ES6
    3. Object.create()
 */

// 1. Наследование с помощью функции конструктора

const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.printAge = function () {
    console.log(new Date().getFullYear() - this.birthYear)
}

const Student = function (firstName, birthYear, dept) {
    Person.call(this, firstName, birthYear) // Вызов функции с указанием ключевого слова this
    this.dept = dept
}

// Связываем прототипы
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study at the ${this.dept} department.`)
}

const jack = new Student('Jack', 2000, 'Programming')
console.log(jack)
jack.introduce()
jack.printAge()

console.log(Object.getPrototypeOf(jack))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(jack)))

console.log(jack instanceof Student) // true так как связали прототипы
console.log(jack instanceof Person) // true

// Устанавливаем конструктор
Student.prototype.constructor = Student
console.dir(Student.prototype.constructor)