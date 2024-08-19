// Task 1: Simple Calculator
function performCalculation() {
    const num1 = parseFloat(document.getElementById('calc-num1').value);
    const num2 = parseFloat(document.getElementById('calc-num2').value);
    const operator = document.getElementById('calc-operator').value;
    const result = calculator(num1, num2, operator);
    document.getElementById('calc-result').textContent = result;
}

function calculator(num1, num2, operator) {
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
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Error: Division by zero is not allowed.';
            }
            break;
        default:
            return 'Error: Invalid operator. Please use +, -, *, or /.';
    }

    return result;
}

// Task 2: Array Operations
function calculateSumOfEvens() {
    const arrayInput = document.getElementById('array-input').value;
    const array = arrayInput.split(',').map(Number);
    const sum = sumOfEvenNumbers(array);
    document.getElementById('array-result').textContent = `Sum of even numbers: ${sum}`;
}

function sumOfEvenNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

// Task 3: Object Manipulation
const Person = {
    firstName: 'Gattu',
    lastName: 'Vamsi',
    age: 21,
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    incrementAge: function() {
        this.age++;
        return this.age;
    }
};

document.getElementById('person-firstName').textContent = Person.firstName;
document.getElementById('person-lastName').textContent = Person.lastName;
document.getElementById('person-age').textContent = Person.age;

function incrementPersonAge() {
    const newAge = Person.incrementAge();
    document.getElementById('person-age').textContent = newAge;
    document.getElementById('person-result').textContent = 'Age incremented!';
}
