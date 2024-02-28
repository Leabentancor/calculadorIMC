
let pesoIngresado;
do {
    pesoIngresado = prompt("Bienvenido al calculador de IMC. \n\nPor favor ingrese su peso en Kg:");
    if (isNaN(pesoIngresado) || pesoIngresado <= 0|| pesoIngresado > 1000) {
        alert("Peso no válido. Por favor ingrese un valor numérico.");
    }
} while (isNaN(pesoIngresado) || pesoIngresado <= 0 || pesoIngresado > 1000);

let alturaIngresada;
do {
    alturaIngresada = prompt("Por favor ingrese su altura en metros:");
    if (isNaN(alturaIngresada) || alturaIngresada <= 0) {
        alert("Altura no válida. Por favor ingrese un valor numérico, recuerda utilizar . en vez de ,");
    }
} while (isNaN(alturaIngresada) || alturaIngresada <= 0);

let resultado;
resultado = pesoIngresado / (alturaIngresada * alturaIngresada);
console.log("Su índice de masa corporal es de " + resultado.toFixed(2));

if (resultado <= 18.5) {
    alert("Te encuentras con bajo peso, ve por unas hamburguesas.");
} else if (resultado < 25) {
    alert("¡¡Te encuentras estupendo CRACK sigue asi!!");
} else if (resultado <= 29.9) {
    alert("Estás un poquito pasado de peso, pero nada que un poco de ejercicio no pueda solucionar.");
} else {
    alert("Ponte a dieta, ve a hacer ejercicio o te dará un patatús.");
}
