const passwordElement = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');
const lengthSlider = document.getElementById('passwordLength');
const lengthValue = document.getElementById('lengthValue');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '@~*';

function generatePassword() {
    let password = '';
    let characters = '';

    if (lowercaseCheckbox.checked) {
        characters += lowercaseChars;
    }
    if (uppercaseCheckbox.checked) {
        characters += uppercaseChars;
    }
    if (numbersCheckbox.checked) {
        characters += numberChars;
    }
    if (symbolsCheckbox.checked) {
        characters += symbolChars;
    }

    for (let i = 0; i < lengthSlider.value; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordElement.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    passwordElement.select();
    document.execCommand('copy');
});

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});
