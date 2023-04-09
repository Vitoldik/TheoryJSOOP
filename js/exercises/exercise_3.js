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

const ElectricCar = function (name, speed, battery) {
    Car.call(this, name, speed)
    this.battery = battery
}

ElectricCar.prototype = Object.create(Car.prototype)

ElectricCar.prototype.changeBattery = function (chargeLevel) {
    this.battery = chargeLevel
}

ElectricCar.prototype.accelerate = function () {
    this.speed += 10
    this.battery -= 1
    console.log(`${this.name} едет со скоростью ${this.speed} км/ч, с зарядом ${this.battery}%`)
}

const tesla = new ElectricCar('Тесла', 100, 33)
console.log(tesla)
tesla.changeBattery(80)
console.log(tesla)
tesla.accelerate()
tesla.break()

