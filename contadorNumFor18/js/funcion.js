function contar(){
    let limite = parseFloat(document.getElementById('txtsuma1').value);
    let contador = 0;
    for(contador=1;contador<=limite;contador++){
        setTimeout(function() {
        if(contador%2 == 0){
            document.getElementById('contado').innerHTML = '<strong>El numero '+contador+' es par</strong>';
        } else {
            document.getElementById('contado').innerHTML = '<strong>El numero '+contador+' es impar</strong>';
        }
        }, contador * 1000);
    }
    return false;
}
