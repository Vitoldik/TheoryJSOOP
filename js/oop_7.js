// Method chaining (цепочка методов)

class Account {
    #transactions = []
    #pin

    constructor(owner, currency, pin) {
        this.owner = owner
        this.currency = currency
        this.#pin = pin
    }

    deposit(value) {
        this.#transactions.push(value)
        return this
    }

    withdraw(value) {
        this.deposit(-value)
        return this
    }

    getTransactions() {
        return this.#transactions
    }

    requestLoan(value) {
        if (this.#approveLoan(value)) {
            this.deposit(value)
            console.log('Займ утвержден!')
        }

        return this
    }

    // Private methods (прикреплены к объекту)
    #approveLoan(value) {
        return true
    }
}

const account = new Account('Джек', 'USD', 1111)
account
    .deposit(5000)
    .withdraw(1000)
    .requestLoan(20000)
    .withdraw(1000)