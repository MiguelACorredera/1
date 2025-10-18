# Password Checker

**Tier:** 2-Intermediate

A password checker app that gives real-time feedback on password strength and ensures it meets complexity requirements. It helps users create secure passwords by validating length, character variety, and more, with an intuitive UI and visual indicators.

## User Stories

- [ ] User can input a password into a text field
- [ ] As the user types, they receive real-time feedback on the following rules:
- [ ] Minimum and maximum length (8-64 characters)
- [ ] Checks for:
    - [ ] Contains at least one uppercase letter
    - [ ] Contains at least one lowercase letter
    - [ ] Contains at least one number
    - [ ] Contains at least one special character (e.g., !@#$%^&)
- [ ] Each rule has a visual indicator (✅ or ❌) to show whether it's met
- [ ] The password input is masked by default (••••), but user can toggle visibility

## Bonus features

- [ ] A strength meter that shows password quality (e.g., Weak, Moderate, Strong) based on number and types of rules met
- [ ] Copy password to clipboard button
- [ ] Dark mode / Light mode toggle
- [ ] Fully responsive UI for mobile and desktop
- [ ] Password strength estimation using a library (e.g., [zxcvbn](https://github.com/dropbox/zxcvbn))
- [ ] Option to generate a strong password directly

## Useful links and resources

- [OWASP Password Guidelines](https://owasp.org/www-community/password-special-characters)
- [zxcvbn Password Strength Estimator](https://github.com/dropbox/zxcvbn)
- [Have I Been Pwned API](https://haveibeenpwned.com/API/v3) — to check for breached passwords (optional)

## Example Projects

- [Password Validator by shubhamranswal](https://github.com/shubhamranswal/PasCheck) - [Live Demo](https://shubhamranswal.github.io/PasCheck/)
