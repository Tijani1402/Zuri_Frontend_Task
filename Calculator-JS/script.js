
const num1 = parseFloat(prompt("Enter the first number."));
const num2 = parseFloat(prompt("Enter second number."));
const operator = prompt("Enter the operator between (+, -, / or *).");

let result;
if(isNaN(num1) ||isNaN(num2)){
    alert('Wrong input! Refresh the page again and provide data!');
}
else{
    if(operator == '+'){
        result = num1 + num2;
    }
    else if(operator == '-'){
        result = num1 - num2;
    }
    else if(operator == '*'){
        result = num1 * num2;
    }
    else if(operator == '/'){
        result = num1 / num2;
    }
    else if(operator !== '+' || operator !== '-' || operator !== '*' || operator !== '/'){
        alert('Error! Refresh page and enter required operator!');
    }
    console.log(num1 + operator + num2 + ' = ' + result );
}
