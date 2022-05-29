

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

appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

operationBtn.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
})

chooseOperation(operation) {
    if (this.currentScreen === '') return
    if (this.previousScreen !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousScreen = this.currentScreen
    this.currentScreen = ''
}

const previousScreen = document.querySelector('[data-previous-screen]')
const currentScreen = document.querySelector('[data-current-screen]')

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }