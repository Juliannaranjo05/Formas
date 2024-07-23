function porcentaje(){

    let porcentaje;
    let num1 = parseFloat(document.getElementById('txtsuma1').value);
    porcentaje = num1/100;
    document.getElementById('porce').innerHTML = '<strong>'+porcentaje+'</strong>';

    return false;
}