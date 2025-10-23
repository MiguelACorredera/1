# Calculator App

A modern, responsive calculator web application built with HTML, CSS, and JavaScript. This calculator supports basic arithmetic operations, decimal calculations, and includes advanced features like sign changes and comprehensive error handling.

![Calculator App](https://img.shields.io/badge/Status-Complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

### Core Features
- **Digital Display**: Shows current number entered or result of last operation
- **Number Input**: Enter numbers up to 8 digits long (0-9)
- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Clear Functions**: 
  - **C**: Clear last number or operation
  - **AC**: Clear all and reset to 0
- **Error Handling**: Shows "ERR" for invalid operations or results exceeding 8 digits

### Bonus Features
- **Decimal Support**: Floating point numbers up to 3 decimal places
- **Sign Change**: +/- button to toggle between positive and negative numbers
- **Keyboard Support**: Full keyboard input support
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Visual Feedback**: Button hover effects and animations

## 🚀 Demo

Open `index.html` in your web browser to see the calculator in action!

## 📁 Project Structure

```
calculator-app/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality and logic
└── README.md       # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone or Download**: Get the project files to your local machine
2. **Open**: Simply open `index.html` in any modern web browser
3. **That's it!** No additional dependencies or build steps required

### Alternative: Live Server (Recommended for Development)

If you have VS Code with Live Server extension:
1. Right-click on `index.html`
2. Select "Open with Live Server"
3. The calculator will open in your browser with auto-reload

## 🎮 Usage

### Mouse/Touch Controls
- Click number buttons (0-9) to enter numbers
- Click operation buttons (+, -, ×, ÷) to perform calculations
- Click = to calculate the result
- Click C to clear the last entry
- Click AC to clear everything
- Click +/- to change the sign of the current number
- Click . to add decimal point

### Keyboard Controls
| Key | Action |
|-----|--------|
| 0-9 | Enter numbers |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| = or Enter | Calculate result |
| . | Decimal point |
| Escape | Clear all (AC) |
| Backspace | Clear last (C) |

## 🔧 Technical Details

### Constraints & Limitations
- **No `eval()` function**: All calculations are performed using proper arithmetic operations
- **8-digit limit**: Numbers exceeding 8 digits will show "ERR"
- **3 decimal places**: Decimal precision limited to 3 places
- **Error handling**: Division by zero and overflow conditions are handled gracefully

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📱 Responsive Design

The calculator is fully responsive and adapts to different screen sizes:
- **Desktop**: Full-size calculator with hover effects
- **Tablet**: Medium-size layout optimized for touch
- **Mobile**: Compact layout with larger touch targets

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
/* Main colors */
.calculator { background: #2c3e50; }
.btn-operator { background: #e74c3c; }
.btn-equals { background: #27ae60; }
.btn-clear { background: #f39c12; }
```

### Modifying Button Layout
The grid layout can be adjusted in the `.buttons` class:
```css
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}
```

## 🐛 Error Handling

The calculator handles several error conditions:

1. **Division by Zero**: Shows "ERR" and resets after 2 seconds
2. **Overflow**: Numbers exceeding 8 digits show "ERR"
3. **Invalid Operations**: Malformed calculations are caught and handled
4. **Display Formatting**: Long numbers are formatted with commas for readability

## 🤝 Contributing

Feel free to contribute to this project! Here are some ways you can help:

1. **Bug Reports**: Found a bug? Open an issue with details
2. **Feature Requests**: Have an idea? Suggest new features
3. **Code Improvements**: Submit pull requests with enhancements
4. **Documentation**: Help improve this README

### Development Setup
1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include screenshots if applicable

## 🔮 Future Enhancements

Potential features for future versions:
- [ ] Scientific calculator functions (sin, cos, tan, etc.)
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] History of calculations
- [ ] Themes and color customization
- [ ] Unit conversions
- [ ] Export/share results

---

**Made with ❤️ using HTML, CSS, and JavaScript**

*This calculator was built as part of the App Ideas collection, focusing on clean code, user experience, and responsive design.*