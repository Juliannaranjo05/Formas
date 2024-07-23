function promedio(){

    let promedio;
    let num1 = parseFloat(document.getElementById('txtsuma1').value);
    let num2 = parseFloat(document.getElementById('txtsuma2').value);
    let num3 = parseFloat(document.getElementById('txtsuma3').value);
    promedio = (num1+num2+num3)/3;
    document.getElementById('promedio').innerHTML = '<strong>'+promedio+'</strong>';

    return false;
}