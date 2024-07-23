function contarFor(){
    let limite = parseFloat(document.getElementById('txtsuma1').value);
    for(let contador=0;contador<=limite;contador++){
        setTimeout(function() {
        document.getElementById('contado').innerHTML = '<strong>' + contador + '</strong>';
        }, contador * 1000);
    }
    return false;
}
