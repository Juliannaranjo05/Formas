function resta(){

    let num1 = parseFloat(document.getElementById('txtsuma1').value);
    let num2 = parseFloat(document.getElementById('txtsuma2').value);
    let restar = num1 - num2;
    document.getElementById('operacion').innerHTML = '<strong>'+restar+'</strong>';

    return false;
}
function multiplicacion(){

    let num1 = parseFloat(document.getElementById('txtsuma1').value);
    let num2 = parseFloat(document.getElementById('txtsuma2').value);
    let multiplicar = num1 * num2;
    document.getElementById('operacion').innerHTML = '<strong>'+multiplicar+'</strong>';

    return false;
}
function division(){

    let num1 = parseFloat(document.getElementById('txtsuma1').value);
    let num2 = parseFloat(document.getElementById('txtsuma2').value);
    let dividir = num1 / num2;
    document.getElementById('operacion').innerHTML = '<strong>'+dividir+'</strong>';

    return false;
}
