class Car {
    name
    speed

    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }

    accelerate() {
        this.speed += 5
        this.logSpeed(this)
        return this
    }

    break() {
        this.speed -= 5
        this.logSpeed(this)
        return this
    }

    logSpeed(car) {
        console.log(`Автомобиль ${car.name} двигается со скоростью ${car.speed} км/ч`)
    }
}

class ElectricCar extends Car {
    #battery

    constructor(name, speed, battery) {
        super(name, speed)
        this.#battery = battery
    }

    accelerate() {
        this.speed += 10
        this.#battery -= 1
        console.log(`${this.name} едет со скоростью ${this.speed} км/ч, с зарядом ${this.#battery}%`)
        return this
    }

    changeBattery(chargeLevel) {
        this.#battery = chargeLevel
        return this
    }
}

const tesla = new ElectricCar('Тесла', 100, 33)
tesla
    .accelerate()
    .break()
    .accelerate()
    .break()
    .changeBattery(100)
    .accelerate()
    .break()
