function tablasMult(){
    let Pmultiplicando = parseFloat(document.getElementById('txtsuma1').value);
    let Pmultiplicador = parseFloat(document.getElementById('txtsuma2').value);
    let Plimite = parseFloat(document.getElementById('txtsuma3').value);
    let PlimiteMultiplicador = parseFloat(document.getElementById('txtsuma4').value);
    let cantidadPar = 0;
    let cantidadImpar = 0;
    function contar(){
    if (Pmultiplicando<Plimite) {
        Pmultiplicador = 0;
        Pmultiplicando++;
        if (Pmultiplicador < PlimiteMultiplicador) {
            Pmultiplicador = Pmultiplicador + 1;
            producto = Pmultiplicando * Pmultiplicador;
            document.getElementById('tabla'). innerHTML= '<strong>'+ Pmultiplicando + " x " + Pmultiplicador + " = " + producto +  '</strong>';
            if (producto%2 == 0) {
                document.getElementById('tabla'). innerHTML = '<strong>' +producto + ' buzz </strong>';
                cantidadPar++;
            } else {
                document.getElementById('tabla'). innerHTML = '<strong>' +producto + ' bass </strong>';
                cantidadImpar++;
            }
        }
}
setTimeout(contar, 1000);
    }
    document.getElementById('tabla').innerHTML = '<strong>La cantidad total de numeros pares es'  + cantidadPar + " y la de numeros impares es " + cantidadImpar +'</strong>';
    contar();
        return false;
}
