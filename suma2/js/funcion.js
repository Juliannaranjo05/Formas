function suma(){

    let sumar;
    let num1 = parseFloat(document.getElementById('txtsuma1').value);
    let num2 = parseFloat(document.getElementById('txtsuma2').value);
    sumar = num1 + num2;
    document.getElementById('suma').innerHTML = '<strong>'+sumar+'</strong>';

    return false;
}