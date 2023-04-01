
function calculate() {

    let operator = document.getElementById("operator").value;
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let answer = document.getElementById("answer");

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    

    switch(operator) {
        case '+':
            answer.innerHTML = numberOne + numberTwo;
            break;
        case '-':
            answer.innerHTML = numberOne - numberTwo;
            break;
        case '*':
            answer.innerHTML = numberOne * numberTwo;
            break;
        case '/':
            answer.innerHTML = numberOne / numberTwo;
            break;
        case '%':
            answer.innerHTML = numberOne % numberTwo;
            break;
        case '**':
            answer.innerHTML = numberOne ** numberTwo;
            break;
        default:
            answer.innerHTML = "Invalid Input"
    }
}