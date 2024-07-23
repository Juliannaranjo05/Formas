function personaEdad(){

    let ano = 2024;
    let fecha1 = parseInt(document.getElementById('txtsuma1').value);
    let fecha2 = parseInt(document.getElementById('txtsuma2').value);
    let fecha3 = parseInt(document.getElementById('txtsuma3').value);
    let persona1 = ano - fecha1;
    let persona2 = ano - fecha2;
    let persona3 = ano - fecha3;
    let suma = persona1 + persona2 + persona3;
    let promedio = suma / 3;
    document.getElementById('edad'). innerHTML= '<strong>La persona 1 tiene '+persona1+' años</strong><br><strong>La persona 2 tiene '+persona2+' años</strong></strong><br><strong>La persona 3 tiene '+persona3+' años</strong><br><strong>El promedio de las 3 edades es '+promedio+'</strong>';

    return false;
}