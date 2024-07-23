function tabla9(){
    let Pmultiplicando = parseFloat(document.getElementById('txtsuma1').value);
    let Pmultiplicar = 9;
    function contar(){
    if (Pmultiplicando<=10){
        let producto = Pmultiplicar *  Pmultiplicando;
        if(producto%2 == 0){
            document.getElementById('tabla'). innerHTML= '<strong>'+ Pmultiplicar + " x " + Pmultiplicando + " = " + producto +  ' el numero es par </strong>';
            Pmultiplicando++;
        } else {
            document.getElementById('tabla'). innerHTML= '<strong>'+ Pmultiplicar + " x " + Pmultiplicando + " = " + producto +  ' el numero es impar </strong>';
            Pmultiplicando++;
        }
    }
    setTimeout(contar, 1000);
    }
    contar();
        return false;
}