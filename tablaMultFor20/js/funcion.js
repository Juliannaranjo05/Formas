function tablaMult(){
    let Pmultiplicar = parseFloat(document.getElementById('txtsuma1').value);
        for (let Pmultiplicando = 1;Pmultiplicando<=10;Pmultiplicando++){
            setTimeout(function() {
            let producto = Pmultiplicando * Pmultiplicar;
            document.getElementById('tabla').innerHTML = '<strong>' + Pmultiplicando + " X " + Pmultiplicar + " = "+ producto +'</strong>';
            }, Pmultiplicando * 1000);
        }
        return false;
}