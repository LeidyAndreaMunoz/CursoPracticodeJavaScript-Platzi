
//Medidas cuadrado

function perimetroCuadrado(lado) {
    return lado * 4
}
perimetroCuadrado()

function areaCuadrado(lado){
    return lado * lado
}


//Medidas Triángulo

const lado1 = Inputlado1triangulo
const lado2 = Inputlado1triangulo
const base = Inputbasetriangulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
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