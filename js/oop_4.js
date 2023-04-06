/*
    Object.create()
*/

const PersonProto = {
     printAge() {
         console.log(new Date().getFullYear() - this.birthYear)
    },

    initPerson(firstName, birthYear) {
         this.firstName = firstName
         this.birthYear = birthYear
    }
}

// Создаст новый объект связанный с прототипом
const jack = Object.create(PersonProto)
console.log(jack)

jack.name = 'Jack'
jack.birthYear = 2000

jack.printAge()

console.log(Object.getPrototypeOf(jack) === PersonProto)

const jane = Object.create(PersonProto)
jane.initPerson('Jane', 2002)
console.log(jane)