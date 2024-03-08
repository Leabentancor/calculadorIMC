function solicitarPeso() {
    let peso;
    do {
        peso = prompt("Bienvenido al calculador de IMC. \n\nPor favor ingrese su peso en Kg:");
        if (isNaN(peso) || peso <= 0 || peso > 1000) {
            alert("Peso no válido. Por favor ingrese un valor numérico.");
        }
    } while (isNaN(peso) || peso <= 0 || peso > 1000);
    return peso;
}

function solicitarAltura() {
    let altura;
    do {
        altura = prompt("Por favor ingrese su altura en metros:");
        if (isNaN(altura) || altura <= 0) {
            alert("Altura no válida. Por favor ingrese un valor numérico.");
        }
    } while (isNaN(altura) || altura <= 0);
    return altura;
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function mostrarMensajeIMC(resultado) {
    if (resultado <= 18.5) {
        alert("Te encuentras con bajo peso, ve por unas hamburguesas.");
    } else if (resultado < 25) {
        alert("¡¡Te encuentras estupendo CRACK sigue así!!");
    } else if (resultado <= 29.9) {
        alert("Estás un poquito pasado de peso, pero nada que un poco de ejercicio no pueda solucionar.");
    } else {
        alert("Ponte a dieta, ve a hacer ejercicio o te dará un patatús.");
    }
}

function main() {
    let pesoIngresado = parseFloat(solicitarPeso());
    let alturaIngresada = parseFloat(solicitarAltura());
    let resultado = calcularIMC(pesoIngresado, alturaIngresada);
    console.log("Su índice de masa corporal es de " + resultado.toFixed(2));
    mostrarMensajeIMC(resultado);
}

main();
