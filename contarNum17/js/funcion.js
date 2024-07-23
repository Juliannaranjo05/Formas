function contar(){
    let limite = parseFloat(document.getElementById('txtsuma1').value);
    let contador = 0;
    function contar(){
        if(contador<limite){
            contador++;
            if(contador%2 == 0){
                document.getElementById('contado').innerHTML = '<strong>El numero '+contador+' es par</strong>';
            } else {
                document.getElementById('contado').innerHTML = '<strong>El numero '+contador+' es impar</strong>';
            }
        }
    setTimeout(contar, 1000);
    }
    contar();
        return false;
}