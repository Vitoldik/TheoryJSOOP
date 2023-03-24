'use strict';

const Car = function (name, speed) {
    this.name = name
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed += 5
    logSpeed(this)
}

Car.prototype.break = function () {
    this.speed -= 5
    logSpeed(this)
}

function logSpeed(car) {
    console.log(`Автомобиль ${car.name} двигается со скоростью ${car.speed} км/ч`)
}

const car1 = new Car('Honda', 120)
const car2 = new Car('BMW', 150)

car1.accelerate()
car2.break()