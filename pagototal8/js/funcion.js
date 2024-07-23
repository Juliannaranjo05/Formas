function pagototal(){

    let PdiasTrab = parseFloat(document.getElementById('txtsuma1').value);
    let Pvalordia = parseFloat(document.getElementById('txtsuma2').value);
    let sueldo = PdiasTrab * Pvalordia;
    let salud = sueldo * 0.12;
    let pension = sueldo * 0.16;
    let arl = sueldo * 0.052;
    let descuento = salud + pension + arl;
    let pagototal = sueldo - descuento;
    document.getElementById('pagototal').innerHTML = '<strong> su sueldo es ' +sueldo+'</strong>' + '<br> <strong> Su salud es '+salud+'</strong>' + '<br> <strong> Su pension es '+pension+'</strong>' + '<br> <strong> Su arl es '+arl+'</strong>' + '<br> <strong>El descuento total es '+descuento+'</strong>' + '<br> <strong> Su pago total es '+pagototal+'</strong>';

    return false;
}