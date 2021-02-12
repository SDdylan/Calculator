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

function operate(x, operator , y) {
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
        default :
            return "Erreur de signe !";
    }
    return resultat;

}


console.log(add(12,8));
alert(add(12, 8));

//stockage de la value du calcul pour plus tard
let calcul ;

//fonction pour ajouter la valeur du bouton a l'écran de texte de la calculatrice
function numberScreen(id) {
    let text = document.getElementById(id).textContent;
    console.log(text);
    if (text === '+' || text === '-' || text === '*' || text === '/') {
        document.getElementById('screen').value += " " + text + " ";
    } else {
        document.getElementById('screen').value += text;
    }
}

//fonction pour calculer (stocker dans un premier lieu)
function egalScreen() {
    calcul = document.getElementById('screen').value;
    let elements = calcul.split(" ");
    alert(operate(parseFloat(elements[0]),elements[1],parseFloat(elements[2])))
    console.log(elements);
}


function resetScreen() {
    document.getElementById('screen').value = '';
}

console.log(operate(6,'+',3));