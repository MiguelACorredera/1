# Scientific Calculator

**Tier:** 1-Beginner

A scientific calculator is an essential tool for students, engineers, and scientists. This project will help you understand advanced mathematical operations, UI design for complex interfaces, and handling different input modes (degrees vs radians). You'll build a calculator that goes beyond basic arithmetic to include trigonometric, logarithmic, and other scientific functions.

The styling should be clean and professional, similar to real scientific calculators. Consider implementing a dark/light mode toggle for better user experience.

### Constraints

- You may not use the `eval()` function to execute calculations
- All trigonometric functions should support both degree and radian modes
- Display should handle scientific notation for very large or very small numbers
- Maximum display precision should be configurable (default: 10 decimal places)

## User Stories

-   [ ] User can see a display showing the current number entered or the result of the last operation
-   [ ] User can see entry pads containing:
    * Basic arithmetic buttons: digits 0-9, operations '+', '-', '*', '/', '=', 'C' (clear), 'AC' (clear all)
    * Scientific function buttons: 'sin', 'cos', 'tan', 'log', 'ln', '√', 'x²', 'x³', 'x^y', 'π', 'e'
    * Mode toggle button to switch between degrees and radians
-   [ ] User can enter numbers as sequences up to 15 digits long by clicking on digits
-   [ ] User can perform basic arithmetic operations (addition, subtraction, multiplication, division)
-   [ ] User can perform trigonometric functions (sin, cos, tan) with proper degree/radian mode handling
-   [ ] User can perform logarithmic functions (log base 10, natural log)
-   [ ] User can perform power operations (square, cube, x to the power of y)
-   [ ] User can use mathematical constants (π, e) in calculations
-   [ ] User can see the current mode (DEG/RAD) displayed on the calculator
-   [ ] User can click the 'C' button to clear the last number or operation
-   [ ] User can click the 'AC' button to clear all internal work areas and reset display to 0
-   [ ] User can see 'ERROR' displayed if any operation would result in an invalid calculation (e.g., division by zero, log of negative number)

## Bonus features

-   [ ] User can toggle between dark and light themes
-   [ ] User can use keyboard input for all operations
-   [ ] User can see calculation history with ability to recall previous results
-   [ ] User can store and recall values using memory functions (M+, M-, MR, MC)
-   [ ] User can perform factorial calculations
-   [ ] User can convert between different number bases (binary, octal, hexadecimal)
-   [ ] User can perform statistical functions (mean, standard deviation)
-   [ ] User can see a help panel explaining each function

## Useful links and resources

- [Scientific Calculator (Wikipedia)](https://en.wikipedia.org/wiki/Scientific_calculator)
- [JavaScript Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Trigonometric Functions](https://en.wikipedia.org/wiki/Trigonometric_functions)
- [Logarithmic Functions](https://en.wikipedia.org/wiki/Logarithm)

## Example projects

- [Scientific Calculator in JavaScript](https://codepen.io/collection/scientific-calculators)
- [React Scientific Calculator](https://github.com/react-calculators)
- [Vanilla JS Scientific Calculator](https://github.com/scientific-calculator-examples)

## Learning notes

- Understanding the difference between degrees and radians is crucial for trigonometric functions
- Implement proper error handling for edge cases (division by zero, invalid inputs)
- Consider using a stack-based approach for handling complex expressions
- Scientific notation display is important for very large or very small numbers
- Memory management for storing intermediate results and constants
