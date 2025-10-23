class Calculator {
    constructor() {
        this.display = document.querySelector('.display-screen');
        this.buttons = document.querySelector('.buttons');
        this.currentNumber = '0';
        this.previousNumber = null;
        this.operation = null;
        this.waitingForOperand = false;
        this.maxDigits = 8;
        
        this.init();
    }
    
    init() {
        this.buttons.addEventListener('click', this.handleButtonClick.bind(this));
        this.updateDisplay();
    }
    
    handleButtonClick(event) {
        const button = event.target;
        
        if (!button.classList.contains('btn')) return;
        
        if (button.hasAttribute('data-number')) {
            this.inputNumber(button.getAttribute('data-number'));
        } else if (button.hasAttribute('data-action')) {
            const action = button.getAttribute('data-action');
            this.handleAction(action);
        }
    }
    
    inputNumber(number) {
        if (this.waitingForOperand) {
            this.currentNumber = number;
            this.waitingForOperand = false;
        } else {
            // Check if we're at the digit limit
            const currentLength = this.currentNumber.replace('.', '').length;
            if (currentLength >= this.maxDigits) {
                return;
            }
            
            this.currentNumber = this.currentNumber === '0' ? number : this.currentNumber + number;
        }
        
        this.updateDisplay();
    }
    
    handleAction(action) {
        switch (action) {
            case 'clear-all':
                this.clearAll();
                break;
            case 'clear':
                this.clear();
                break;
            case 'sign':
                this.changeSign();
                break;
            case 'decimal':
                this.inputDecimal();
                break;
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                this.performOperation(action);
                break;
            case 'calculate':
                this.calculate();
                break;
        }
    }
    
    clearAll() {
        this.currentNumber = '0';
        this.previousNumber = null;
        this.operation = null;
        this.waitingForOperand = false;
        this.updateDisplay();
    }
    
    clear() {
        if (this.operation && this.waitingForOperand) {
            // If last action was an operation, clear it and show previous number
            this.operation = null;
            this.waitingForOperand = false;
            this.currentNumber = this.previousNumber || '0';
            this.previousNumber = null;
        } else {
            // Clear current number
            this.currentNumber = '0';
        }
        this.updateDisplay();
    }
    
    changeSign() {
        if (this.currentNumber !== '0') {
            this.currentNumber = this.currentNumber.charAt(0) === '-' 
                ? this.currentNumber.slice(1) 
                : '-' + this.currentNumber;
            this.updateDisplay();
        }
    }
    
    inputDecimal() {
        if (this.waitingForOperand) {
            this.currentNumber = '0.';
            this.waitingForOperand = false;
        } else if (this.currentNumber.indexOf('.') === -1) {
            this.currentNumber += '.';
        }
        this.updateDisplay();
    }
    
    performOperation(nextOperation) {
        const inputValue = parseFloat(this.currentNumber);
        
        if (this.previousNumber === null) {
            this.previousNumber = inputValue;
        } else if (this.operation) {
            const currentValue = this.previousNumber || 0;
            const newValue = this.performCalculation(this.operation, currentValue, inputValue);
            
            if (this.isError(newValue)) {
                this.showError();
                return;
            }
            
            this.currentNumber = String(newValue);
            this.previousNumber = newValue;
        }
        
        this.waitingForOperand = true;
        this.operation = nextOperation;
        this.updateDisplay();
    }
    
    calculate() {
        const inputValue = parseFloat(this.currentNumber);
        
        if (this.previousNumber !== null && this.operation) {
            const newValue = this.performCalculation(this.operation, this.previousNumber, inputValue);
            
            if (this.isError(newValue)) {
                this.showError();
                return;
            }
            
            this.currentNumber = String(newValue);
            this.previousNumber = null;
            this.operation = null;
            this.waitingForOperand = true;
            this.updateDisplay();
        }
    }
    
    performCalculation(operation, firstOperand, secondOperand) {
        switch (operation) {
            case 'add':
                return firstOperand + secondOperand;
            case 'subtract':
                return firstOperand - secondOperand;
            case 'multiply':
                return firstOperand * secondOperand;
            case 'divide':
                if (secondOperand === 0) {
                    return NaN;
                }
                return firstOperand / secondOperand;
            default:
                return secondOperand;
        }
    }
    
    isError(value) {
        if (isNaN(value) || !isFinite(value)) {
            return true;
        }
        
        // Check if result exceeds 8 digits (excluding decimal point)
        const stringValue = String(Math.abs(value));
        const integerPart = stringValue.split('.')[0];
        
        return integerPart.length > this.maxDigits;
    }
    
    showError() {
        this.display.textContent = 'ERR';
        this.display.classList.add('error');
        
        setTimeout(() => {
            this.display.classList.remove('error');
            this.clearAll();
        }, 2000);
    }
    
    formatNumber(number) {
        const parts = number.split('.');
        const integerPart = parts[0];
        const decimalPart = parts[1];
        
        // Format integer part with commas for readability
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
        if (decimalPart !== undefined) {
            // Limit decimal places to 3
            const limitedDecimal = decimalPart.slice(0, 3);
            return formattedInteger + '.' + limitedDecimal;
        }
        
        return formattedInteger;
    }
    
    updateDisplay() {
        // Remove commas for internal calculations
        const cleanNumber = this.currentNumber.replace(/,/g, '');
        
        // Format for display
        if (cleanNumber === '0' || cleanNumber === '' || cleanNumber === '-0') {
            this.display.textContent = '0';
        } else {
            this.display.textContent = this.formatNumber(cleanNumber);
        }
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    let button = null;
    
    if (key >= '0' && key <= '9') {
        button = document.querySelector(`[data-number="${key}"]`);
    } else {
        switch (key) {
            case '+':
                button = document.querySelector('[data-action="add"]');
                break;
            case '-':
                button = document.querySelector('[data-action="subtract"]');
                break;
            case '*':
                button = document.querySelector('[data-action="multiply"]');
                break;
            case '/':
                event.preventDefault(); // Prevent browser search
                button = document.querySelector('[data-action="divide"]');
                break;
            case '=':
            case 'Enter':
                button = document.querySelector('[data-action="calculate"]');
                break;
            case '.':
                button = document.querySelector('[data-action="decimal"]');
                break;
            case 'Escape':
                button = document.querySelector('[data-action="clear-all"]');
                break;
            case 'Backspace':
                button = document.querySelector('[data-action="clear"]');
                break;
        }
    }
    
    if (button) {
        button.click();
        button.classList.add('btn-active');
        setTimeout(() => button.classList.remove('btn-active'), 100);
    }
});