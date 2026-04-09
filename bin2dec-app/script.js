const form = document.getElementById("converter-form");
const binaryInput = document.getElementById("binary-input");
const allowVariableLength = document.getElementById("allow-variable-length");
const errorText = document.getElementById("error-text");
const decimalOutput = document.getElementById("decimal-output");

function setError(message) {
  errorText.textContent = message;
}

function sanitizeInput(value) {
  return value.trim();
}

function isBinaryString(value) {
  return /^[01]+$/.test(value);
}

function binaryToDecimal(binaryValue) {
  let decimalValue = 0;
  let positionFromRight = 0;

  for (let i = binaryValue.length - 1; i >= 0; i -= 1) {
    if (binaryValue[i] === "1") {
      decimalValue += Math.pow(2, positionFromRight);
    }
    positionFromRight += 1;
  }

  return decimalValue;
}

function validateInput(binaryValue, allowLongInput) {
  if (!binaryValue) {
    return "Please enter a binary number.";
  }

  if (!isBinaryString(binaryValue)) {
    return "Only 0 and 1 are allowed.";
  }

  if (!allowLongInput && binaryValue.length > 8) {
    return "Use up to 8 digits, or enable bonus mode.";
  }

  return "";
}

allowVariableLength.addEventListener("change", () => {
  binaryInput.maxLength = allowVariableLength.checked ? 64 : 8;
  setError("");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  setError("");

  const binaryValue = sanitizeInput(binaryInput.value);
  const validationMessage = validateInput(binaryValue, allowVariableLength.checked);

  if (validationMessage) {
    decimalOutput.textContent = "-";
    setError(validationMessage);
    return;
  }

  const result = binaryToDecimal(binaryValue);
  decimalOutput.textContent = String(result);
});
