function circulo(){

    let area;
    let radio = parseFloat(document.getElementById('txtsuma1').value);
    let pi = 3.141592;
    area = (radio*radio) * pi;
    img = "https://calculatodo.com/img/areas/circulo.png";
    document.getElementById('area').innerHTML = '<strong class="resultado">'+area+'</strong>' + '<img src="' + img +'" class="imagen"></img>';

    return false;
}
function rectangulo(){

    let area;
    let baseRect = parseFloat(document.getElementById('txtsuma1').value);
    let alturaRect = parseFloat(document.getElementById('txtsuma2').value);
    area = baseRect * alturaRect;
    img = "https://calculatodo.com/img/areas/rectangulo.png";
    document.getElementById('area').innerHTML = '<strong class="resultado">'+area+'</strong>' + '<img src="' + img +'" class="imagen"></img>';

    return false;
}
function cuadrado(){

    let area;
    let Lado = parseFloat(document.getElementById('txtsuma1').value);
    area = Lado * Lado;
    img = "https://calculatodo.com/img/areas/cuadrado.png";
    document.getElementById('area').innerHTML = '<strong class="resultado">'+area+'</strong>' + '<img src="' + img +'" class="imagen"></img>';
    
    return false;
}
function trianguloRectangulo(){

    let area;
    let catetoAdyacente = parseFloat(document.getElementById('txtsuma1').value);
    let catetoOpuesto = parseFloat(document.getElementById('txtsuma2').value);
    area = (catetoAdyacente * catetoOpuesto)/2;
    img = "https://static.vecteezy.com/system/resources/previews/008/197/153/non_2x/handwritten-right-triangle-interpreting-the-pythagorean-theorem-two-right-sides-and-one-hypotenuse-of-a-right-triangle-pythagorean-theorem-or-illustration-free-vector.jpg";
    document.getElementById('area').innerHTML = '<strong class="resultado">'+area+'</strong>' + '<img src="' + img +'" class="imagen"></img>';

    return false;
}