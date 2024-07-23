function cuadrado(){
    let lado1 = parseFloat(document.getElementById('txtsuma1').value);
    let lado2 = parseFloat(document.getElementById('txtsuma2').value);
    let lado3 = parseFloat(document.getElementById('txtsuma3').value);
    let areaCuad1 = lado1 * lado1;
    let areaCuad2 = lado2 * lado2;
    let areaCuad3 = lado3 * lado3;

    if (areaCuad1 == areaCuad2 & areaCuad2 == areaCuad3 & areaCuad3 == areaCuad1){
        document.getElementById('areas').innerHTML = '<strong>Las areas son iguales con '+areaCuad1+'</strong>';
    } else if (areaCuad1 > areaCuad2 & areaCuad1 > areaCuad3) {
        document.getElementById('areas').innerHTML = '<strong>El area mayor es la 1 con '+areaCuad1+'</strong>';
    } else if (areaCuad2 > areaCuad3) {
        document.getElementById('areas').innerHTML = '<strong>El area mayor es la 2 con '+areaCuad2+'</strong>';
    } else {
        document.getElementById('areas').innerHTML = '<strong>El area mayor es la 3 con '+areaCuad3+'</strong>';
    }
    return false;
}