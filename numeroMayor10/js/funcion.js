function numeroMayor(){

    let num1 = parseFloat(document.getElementById('txtsuma1').value);
    let num2 = parseFloat(document.getElementById('txtsuma2').value);

    if (num1 == num2) {
        document.getElementById('num').innerHTML = '<strong> Los numeros son iguales a ' +num1+'</strong>';
    } else if (num1>num2){
        document.getElementById('num').innerHTML = '<strong> El numero 1 es mayor = ' +num1+'</strong>';
    } else {
        document.getElementById('num').innerHTML = '<strong> El numero 2 es mayor = ' +num2+'</strong>';
    }
    return false;
}