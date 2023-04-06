class Car {
    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }

    accelerate() {
        this.speed += 5
        this.logSpeed()
    }

    break() {
        this.speed -= 5
        this.logSpeed()
    }

    get speedMph() {
        return this.speed / 1.6
    }

    set speedMph(speed) {
        this.speed = speed * 1.6
    }

    logSpeed() {
        console.log(`Автомобиль ${this.name} двигается со скоростью ${this.speed} км/ч`)
    }
}

const bmw = new Car('BMV', 100)
bmw.accelerate()
bmw.accelerate()
console.log(bmw.speedMph)
bmw.speedMph = 130
console.log(bmw.speedMph)
