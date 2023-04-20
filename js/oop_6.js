/*
    Инкапсуляция

    1. Фейковая (с помощью _)
    2. Public fields, private fields, public methods, private methods
*/

class Account {
    // Public fields (находятся не в прототипе, а в самом объекте)
    local = navigator.language

    // Private fields (символ # делает поле приватным)
    #transactions = []
    #pin

    constructor(owner, currency, pin) {
        this.owner = owner
        this.currency = currency
        this.#pin = pin // Подсказка, что переменная приватная
        //this._transactions = []
        //this.local = navigator.language
    }

    // Public methods
    deposit(value) {
        this.#transactions.push(value)
    }

    withdraw(value) {
        this.deposit(-value)
    }

    getTransactions() {
        return this.#transactions
    }

    requestLoan(value) {
        if (this.#approveLoan(value)) {
            this.deposit(value)
            console.log('Займ утвержден!')
        }
    }

    static greet() {
        console.log('Hi!')
    }

    // Private methods (прикреплены к объекту)
    #approveLoan(value) {
        return true
    }
}

const account1 = new Account('Джек', 'USD', 1111)
account1.deposit(500)
account1.deposit(600)
console.log(account1)
// console.log(account1.#transactions) - не выйдет
console.log(account1.getTransactions())
// account1.#approveLoan() - не выйдет