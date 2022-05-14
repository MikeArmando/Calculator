const previousScreen = document.querySelector('[data-previous-screen]')
const currentScreen = document.querySelector('[data-current-screen]')

const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equals]')
const allClear = document.querySelector('[data-all-clear]')
const del = document.querySelector('[data-del]')
const calculator = new Calculator(previousScreen, currentScreen)

allClear.addEventListener('click', function () {
    previousScreen.innerHTML = ''
    currentScreen.innerHTML = ''
})

class Calculator {
    constructor(previousScreen, currentScreen) {
        this.previousScreen = previousScreen
        this.currentScreen = currentScreen
        this.clear()
    }

    clear() {
        this.currentScreen = ''
        this.previousScreen = ''
        this.operation = undefined
    }

    delete() {
    }

    appendNumber(number) {
    }

    chooseOperation(operation) {
    }

    compute() {
    }

    updateDisplay() {
    }

}

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})