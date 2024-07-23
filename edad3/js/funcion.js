function edad(){

    let edad;
    let fecha = parseInt(document.getElementById('txtsuma1').value);
    let fechaAct = parseInt(document.getElementById('txtsuma2').value);
    edad = fechaAct - fecha;
    document.getElementById('edad').innerHTML = '<strong>Tienes '+edad+' años</strong>';

    return false;
}