
//Medidas cuadrado

function perimetroCuadrado(lado) {
    return lado * 4
}
perimetroCuadrado()

function areaCuadrado(lado){
    return lado * lado
}


//Medidas Triángulo
function perimetroTriangulo() {
    const lado1 = document.getElementById("Inputlado1triangulo").value
    const lado2 = document.getElementById("Inputlado2triangulo").value
    const base = document.getElementById("Inputbasetriangulo").value
    if (lado1 === lado2) {
        alert(parseInt(lado1) + parseInt(lado2) + parseInt(base) ) 
    } else {
        alert("No es un triangulo isoceles")
    }
    
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

//Medidas Circulo

function diametroCirculo(radio) {
    return radio * 2
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

function areaCirculo(radio) {
    return (radioCirculo * radioCirculo) * PI
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function  calcularPerimetroTriangulo() {
    const perimetro = perimetroTriangulo
    alert(perimetro)
}

function alturaTriangulo() {
    var l1 = parseInt(document.getElementById("Inputlado1triangulo").value)
    var l2 = parseInt(document.getElementById("Inputlado2triangulo").value)
    var base = parseInt(document.getElementById("Inputbasetriangulo").value)  
    
    if(l1 === l2) {
        var altura = Math.pow(l1,2) - Math.pow((base/2), 2);
        alert("La alutura es: " + Math.sqrt(altura))
    } else {
        alert("No es un triangulo isoceles")
    }
   

}