function contar(){
    let limite = parseFloat(document.getElementById('txtsuma1').value);
    let contador = 0;
    function contar1(){
        if (contador<limite){
            contador++;
            document.getElementById('contado').innerHTML = '<strong>'+contador+'</strong>';
        }
        setTimeout(contar1, 1000);
    }
    contar1();
        return false;
}