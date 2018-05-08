
//Ejercicio 1

var arreglo = [45, 75, 200, 256, 1, 27];
// Declaración de variables
var contador = 0;
var estado = 1;
var min = arreglo[0];
var max = arreglo[0];
var max2 = arreglo[0];

//Obtengo la longitud del array
while (estado == 1) {
  if (arreglo[contador] == null) {
    estado = 2;
  }
  contador = contador + 1;
}

//Corro por todo el array
for (var i = 0; i < contador - 1; i++) {
  if (arreglo[i] < min) {
    //Obtengo el número menor
    min = arreglo[i];
  }
  if (arreglo[i] > max) {
    max2 = max;
    //Obtengo el primer número mayor
    max = arreglo[i];
  }
  else {
    if (arreglo[i] > max2) {
      //Obtengo el segundo número mayor
      max2 = arreglo[i];
    }
  }
}
console.log('Número mínimo:' + min + ', Primer Número Máximo:' + max + ', Segundo Número Máximo:', max2);
document.getElementById('min').innerHTML = min;
document.getElementById('max').innerHTML = max;
document.getElementById('max2').innerHTML = max2;