function mayorOmenor(){

    let edad = parseFloat(document.getElementById('txtsuma1').value);
    if (edad < 18){
        document.getElementById('edad').innerHTML = '<strong>La persona es menor de edad con ' +edad+'</strong>';
    } else {
        document.getElementById('edad').innerHTML = '<strong>La persona es mayor de edad con ' +edad+'</strong>';
    }

    return false;
}

