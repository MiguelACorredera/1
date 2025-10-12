Simple Web Calculator (HTML, Tailwind CSS, JavaScript)
This document provides the complete, self-contained code and a detailed description for a responsive web-based calculator. This application demonstrates essential front-end skills including UI layout, event handling, and maintaining state in pure JavaScript.

Features
Basic Arithmetic: Supports addition, subtraction, multiplication, and division.

8-Digit Limit: Input and output numbers are limited to 8 significant digits.

Error Handling: Displays ERR for results that exceed the 8-digit limit (e.g., 99,999,999+1) or for division by zero.

Responsive Design: Uses Tailwind CSS for a modern, mobile-friendly interface.

Clear Functions:

AC (All Clear): Resets the entire calculator state.

C (Clear Entry): Clears the current input value only.

Source Code (calculator.html)
This is a single-file implementation containing all HTML structure, Tailwind CSS styling, and JavaScript logic.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Calculator</title>
    <!-- Load Tailwind CSS -->
    <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
    <!-- Use Inter font -->
    <style>
        @import url('[https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap)');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6; /* Light gray background */
        }
        /* Custom styles for the display to ensure monospaced look */
        #display {
            letter-spacing: -0.05em; /* Tighten up the numbers */
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen p-4">

    <!-- Calculator Container -->
    <div id="calculator-app" class="bg-gray-800 shadow-2xl rounded-3xl w-full max-w-sm p-6">
        
        <!-- Display Screen -->
        <div class="bg-gray-900 p-4 mb-6 rounded-xl shadow-inner border border-gray-700">
            <div id="display" 
                 class="text-right text-white font-mono text-5xl font-bold overflow-hidden whitespace-nowrap"
                 style="height: 1.25em;">0</div>
        </div>

        <!-- Button Grid -->
        <div class="grid grid-cols-4 gap-3">
            
            <!-- Utility Buttons (AC, C, /) -->
            <button onclick="clearAll()" class="calc-btn utility-btn bg-gray-600 hover:bg-gray-500 text-white col-span-1">AC</button>
            <button onclick="clearEntry()" class="calc-btn utility-btn bg-gray-600 hover:bg-gray-500 text-white col-span-1">C</button>
            <button onclick="appendDigit('.')" class="calc-btn digit-btn bg-gray-600 hover:bg-gray-500 text-white col-span-1">.</button>
            <button onclick="setOperator('÷')" class="calc-btn operator-btn bg-orange-500 hover:bg-orange-400 text-white">÷</button>
            
            <!-- Row 7, 8, 9, * -->
            <button onclick="appendDigit(7)" class="calc-btn digit-btn">7</button>
            <button onclick="appendDigit(8)" class="calc-btn digit-btn">8</button>
            <button onclick="appendDigit(9)" class="calc-btn digit-btn">9</button>
            <button onclick="setOperator('×')" class="calc-btn operator-btn bg-orange-500 hover:bg-orange-400 text-white">×</button>

            <!-- Row 4, 5, 6, - -->
            <button onclick="appendDigit(4)" class="calc-btn digit-btn">4</button>
            <button onclick="appendDigit(5)" class="calc-btn digit-btn">5</button>
            <button onclick="appendDigit(6)" class="calc-btn digit-btn">6</button>
            <button onclick="setOperator('-')" class="calc-btn operator-btn bg-orange-500 hover:bg-orange-400 text-white">-</button>

            <!-- Row 1, 2, 3, + -->
            <button onclick="appendDigit(1)" class="calc-btn digit-btn">1</button>
            <button onclick="appendDigit(2)" class="calc-btn digit-btn">2</button>
            <button onclick="appendDigit(3)" class="calc-btn digit-btn">3</button>
            <button onclick="setOperator('+')" class="calc-btn operator-btn bg-orange-500 hover:bg-orange-400 text-white">+</button>

            <!-- Row 0, = -->
            <button onclick="appendDigit(0)" class="calc-btn digit-btn col-span-2">0</button>
            <button onclick="calculate()" class="calc-btn equal-btn bg-green-600 hover:bg-green-500 text-white col-span-2">=</button>
        </div>
    </div>

    <!-- General Button Styling Class -->
    <script>
        // Apply consistent button styling via JS, though Tailwind classes are the primary way
        document.querySelectorAll('.calc-btn').forEach(button => {
            button.classList.add(
                'rounded-full', 
                'p-4', 
                'text-2xl', 
                'font-semibold', 
                'transition-colors', 
                'duration-150', 
                'shadow-lg'
            );
        });
        document.querySelectorAll('.digit-btn').forEach(button => {
            button.classList.add('bg-gray-700', 'text-white', 'hover:bg-gray-600');
        });
    </script>


    <!-- Calculator Logic -->
    <script>
        // --- State Variables ---
        let currentInput = '0';
        let previousValue = null;
        let operator = null;
        let waitingForNewInput = true;
        const MAX_DIGITS = 8;
        const displayElement = document.getElementById('display');

        /**
         * Updates the display element with the current value, handling 'ERR'.
         */
        function updateDisplay() {
            if (currentInput === 'ERR') {
                displayElement.textContent = 'ERR';
                return;
            }

            // Ensure the displayed number is limited to 8 characters for non-scientific notation
            let displayValue = currentInput.toString();

            // Handle very large numbers by checking for length (excluding sign/decimal)
            if (displayValue.length > MAX_DIGITS + 1 && displayValue.includes('.')) {
                // If it's a long decimal, try to fix it to fit
                const integerPart = displayValue.split('.')[0];
                const decimalLimit = MAX_DIGITS - integerPart.length - (integerPart.includes('-') ? 1 : 0);
                if (decimalLimit > 0) {
                    displayValue = parseFloat(currentInput).toFixed(decimalLimit);
                }
            }
            
            // Final check on length before displaying
            if (displayValue.length > MAX_DIGITS && !displayValue.includes('e')) {
                 displayElement.textContent = 'ERR';
                 currentInput = 'ERR'; // Persist error state
                 return;
            }

            displayElement.textContent = displayValue;
        }

        /**
         * Handles digit and decimal point input. Enforces the 8-digit limit.
         * @param {number|string} digit - The digit or decimal point to append.
         */
        function appendDigit(digit) {
            if (currentInput === 'ERR') return;

            if (waitingForNewInput) {
                // Start a new number after an operation or calculation
                currentInput = digit === '.' ? '0.' : digit.toString();
                waitingForNewInput = false;
            } else {
                // Check length limit (excluding sign and decimal point for basic count)
                if (currentInput.replace(/[.\-]/g, '').length >= MAX_DIGITS) {
                    // Ignore extra digits beyond 8
                    return;
                }

                if (digit === '.') {
                    if (!currentInput.includes('.')) {
                        currentInput += '.';
                    }
                } else {
                    if (currentInput === '0' && digit !== '0') {
                        currentInput = digit.toString();
                    } else if (currentInput !== '0') {
                        currentInput += digit.toString();
                    }
                }
            }
            updateDisplay();
        }

        /**
         * Sets the pending arithmetic operator.
         * @param {string} nextOperator - The operator (+, -, ×, ÷).
         */
        function setOperator(nextOperator) {
            if (currentInput === 'ERR') return;

            const inputValue = parseFloat(currentInput);

            if (previousValue === null) {
                // If no previous value, store current input as the first operand
                previousValue = inputValue;
            } else if (!waitingForNewInput) {
                // If a previous operation exists and a new number was entered, calculate the intermediate result
                calculate(false); // Calculate without resetting state completely
            }
            
            operator = nextOperator;
            waitingForNewInput = true;
            
            // Display the previous value if calculation happened, otherwise current input
            updateDisplay();
        }

        /**
         * Performs the arithmetic calculation.
         * @param {boolean} resetState - If true (from '=' button), clears operator and previous value.
         */
        function calculate(resetState = true) {
            if (previousValue === null || operator === null || waitingForNewInput && resetState) {
                // Prevent calculation if missing operands or if '=' is pressed twice
                return;
            }

            const current = parseFloat(currentInput);
            const prev = previousValue;
            let result = 0;

            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '×':
                    result = prev * current;
                    break;
                case '÷':
                    if (current === 0) {
                        result = NaN; // Division by zero
                    } else {
                        result = prev / current;
                    }
                    break;
                default:
                    return;
            }

            // Check for Errors: Division by zero or overflow
            if (isNaN(result) || result === Infinity || result === -Infinity) {
                currentInput = 'ERR';
            } else {
                // Format the result to string and check for 8-digit limit
                let resultString = result.toString();

                if (resultString.includes('e')) {
                    // Handle scientific notation: If the number is large enough to trigger scientific notation, it likely exceeds 8 digits.
                    // A simple check for standard calculator constraints: large absolute value
                    if (Math.abs(result) > 99999999) { 
                        currentInput = 'ERR';
                    } else {
                        currentInput = resultString;
                    }
                } else if (resultString.length > MAX_DIGITS) {
                    // If it's a long decimal, trim it to fit (8 characters total)
                    const [integerPart, decimalPart] = resultString.split('.');
                    if (integerPart.length >= MAX_DIGITS) {
                        currentInput = 'ERR';
                    } else if (decimalPart) {
                        const maxDecimalDigits = MAX_DIGITS - integerPart.length - 1; // 1 for the decimal point
                        currentInput = parseFloat(result).toFixed(maxDecimalDigits);
                    } else {
                        currentInput = resultString;
                    }
                } else {
                    currentInput = resultString;
                }
            }

            if (resetState) {
                // If '=' was pressed, reset for the next operation
                operator = null;
                previousValue = null;
            } else {
                // If an intermediate calculation was performed (e.g., 2 + 3 +), set the result as the new previous value
                previousValue = parseFloat(currentInput);
                waitingForNewInput = true; // Still waiting for the second operand of the new operation
            }
            
            waitingForNewInput = true;
            updateDisplay();
        }

        /**
         * Clears the current input (C button).
         */
        function clearEntry() {
            if (currentInput === 'ERR') {
                 clearAll();
            } else {
                currentInput = '0';
                waitingForNewInput = true;
                updateDisplay();
            }
        }

        /**
         * Resets the entire calculator state (AC button).
         */
        function clearAll() {
            currentInput = '0';
            previousValue = null;
            operator = null;
            waitingForNewInput = true;
            updateDisplay();
        }

        // Initialize the display
        document.addEventListener('DOMContentLoaded', updateDisplay);

    </script>

</body>
</html>
