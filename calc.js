function add(x, y) {
    return(x + y);
}

function substract(x, y) {
    return(x - y);
}

function multiply(x, y){
    return(x * y);
}

function divide(x, y){
    return(x / y);
}

function operate(operator, x , y) {
    let resultat;
    switch (operator) {
        case '+':
            resultat = add(x, y);
            break;
        case '-':
            resultat = substract(x, y);
            break;
        case '*':
            resultat = multiply(x, y);
            break;
        case '/':
            resultat = divide(x, y);
            break;
    }
    return resultat;

}