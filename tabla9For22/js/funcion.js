function tabla9(){
    let Pmultiplicar = 9;
    let NumFinal = parseFloat(document.getElementById('txtsuma2').value);
    for (let NumInicio = parseFloat(document.getElementById('txtsuma1').value);NumInicio<=NumFinal;NumInicio++){
        setTimeout(function() {
        let producto = Pmultiplicar *  NumInicio;
        if(producto%2 == 0){
            document.getElementById('tabla').innerHTML= '<strong>'+ Pmultiplicar + " x " + NumInicio + " = " + producto +  ' el numero es par </strong>';
        } else {
            document.getElementById('tabla').innerHTML= '<strong>'+ Pmultiplicar + " x " + NumInicio + " = " + producto +  ' el numero es impar </strong>';
        }
        }, NumInicio * 1000);
    }
        return false;
}