'use strict'

const numbersBtn = document.querySelectorAll('[data-number]')
const operationsBtn = document.querySelectorAll('[data-operation]')
const allClearBtn = document.querySelector('[data-all-clear]')
const equalsBtn = document.querySelector('[data-equals]')
const deleteBtn = document.querySelector('[data-delete]')
console.log(deleteBtn, allClearBtn)
const previousOperandTextELement = document.querySelector(
  '[data-previous-operand]'
)
const currentOperandTextELement = document.querySelector(
  '[data-current-operand]'
)

class Calculator {
  constructor(previousOperandTextELement, currentOperandTextELement) {
    this.previousOperandTextELement = previousOperandTextELement
    this.currentOperandTextELement = currentOperandTextELement
    this.clear()
  }

  clear() {
    this.previousOperand = ''
    this.currentOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let result
    const current = parseFloat(this.currentOperand)
    const previous = parseFloat(this.previousOperand)
    if (isNaN(previous) || isNaN(current)) return

    switch (this.operation) {
      case '+':
        result = previous + current
        break
      case '-':
        result = previous - current
        break
      case '*':
        result = previous * current
        break
      case '÷':
        result = previous / current
        break
      case '%':
        result = (previous / 100) * current
        break
      default:
        return
    }

    this.currentOperand = result
    this.operation = ''
    this.previousOperand = ''
  }

  updateDisplay() {
    this.currentOperandTextELement.textContent = this.currentOperand
    if (this.operation !== undefined) {
      this.previousOperandTextELement.textContent = `${this.previousOperand} ${this.operation}`
    } else {
      this.previousOperandTextELement.textContent = ''
    }
  }
}

const calculator = new Calculator(
  previousOperandTextELement,
  currentOperandTextELement
)

numbersBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.appendNumber(btn.textContent)
    calculator.updateDisplay()
  })
})

operationsBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.textContent)
    calculator.updateDisplay()
  })
})

equalsBtn.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
  //   calculator.clear()
})

allClearBtn.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteBtn.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})
