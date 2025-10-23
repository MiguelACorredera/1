# BMI Calculator

**Tier:** 1-Beginner

The Body Mass Index (BMI) Calculator is a simple application designed to calculate and classify a user's BMI based on their height and weight.  
BMI is a widely used indicator of whether a person has a healthy body weight for their height, providing a quick assessment of general fitness.

This project provides hands-on experience with collecting user input, performing simple calculations, and displaying dynamic results on a web page.

Check out the example BMI calculator app below to better understand the expected functionality and style.

---

## User Stories

- [ ] User can enter their weight (in kg)  
- [ ] User can enter their height (in cm)  
- [ ] User can initiate the BMI calculation  
- [ ] User can view the calculated BMI value rounded to two decimal places 
- [ ] User can view the corresponding BMI category (e.g., Underweight, Normal, Overweight, Obesity)  
- [ ] User sees an error message(alert) if any required field is left empty  

---

## Calculation Details

The app should use the standard BMI formula:
BMI = weight (kg) / [height (m)]²

> Note: Height entered in centimeters must be converted to meters before squaring.

Example:  
If height = 170 cm (1.7 m) and weight = 65 kg  
BMI = 65 / (1.7 × 1.7) = 22.5

---

## Weight Status Categories

| BMI Range | Category       |
|------------|----------------|
| < 18.5     | Underweight    |
| 18.5–24.9  | Normal weight  |
| 25.0–29.9  | Overweight     |
| ≥ 30.0     | Obesity        |

---

## Bonus Features

- [ ] Display color-coded results based on BMI category  
- [ ] Include brief health guidance or category information (e.g., from [calculator.net](https://www.calculator.net/bmi-calculator.html))  
- [ ] Add a reset button to clear inputs and results  
- [ ] Make the layout responsive for mobile and desktop  

---

## Useful Links and Resources

- [Body Mass Index (Wikipedia)](https://en.wikipedia.org/wiki/Body_mass_index)  

---

## Example Projects

- [BMI-Calculator-Javascript](https://aaronbmicalculator.netlify.app/) ( hosted on Netlify)
