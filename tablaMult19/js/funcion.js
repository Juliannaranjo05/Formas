function tablaMult(){
    let Pmultiplicar = parseFloat(document.getElementById('txtsuma1').value);
    let Pmultiplicando = 0;
    function contar(){
        if (Pmultiplicando<10){
            Pmultiplicando++;
            let producto = Pmultiplicando * Pmultiplicar;
            document.getElementById('tabla').innerHTML = '<strong>' + Pmultiplicando + " X " + Pmultiplicar + " = "+ producto +'</strong>';
        }
        setTimeout(contar, 1000);
    }
    contar();
        return false;
}