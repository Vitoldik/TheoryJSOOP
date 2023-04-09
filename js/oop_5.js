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

/*
    Классы ES6
*/

class Person1 {
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

    static highFive() {
        console.log('High five!')
    }
}

class Student1 extends Person1 {
    constructor(fullName, birthDate, dept) {
        // Обязательно записать в самом начале
        super(fullName, birthDate);
        this.dept = dept
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study at the ${this.dept} department.`)
    }

    greet() {
        console.log(`Hello! My name is ${this.fullName}, i'm a student`)
    }
}

const test = new Student1('test test', 2005, 'Programming')
console.log(test)
test.introduce()
test.greet()

