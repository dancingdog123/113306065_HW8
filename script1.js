function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Result = Invalid input. Please enter valid numbers.';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = 'Result = Division by zero is not allowed.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = 'Result = Invalid operator.';
            return;
    }

    resultElement.textContent = `Result = ${result.toFixed(2)}`;
}
