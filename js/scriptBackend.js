//variables
/*let nombre = "jhon";
const PI = 3.141592;
var edad = 12;
var nombre = 12; */
var numero1 = "1";
var numero2 = 1;
var suma = numero2 + numero1;
//operadores: + - * / % > < >= <= ===
//condionales
/*
if (numero1 === numero2 || (numero2 > numero2 && numero1 < numero == 2)) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}*/
//funciones
function sumaNumeros(num1, num2) {
  return num1 + num2;
}

let resta = (num1, num2) => {
  return num1 - num2;
};

//console.log(sumaNumeros(numero1, numero2));

//librerias
//ciclos
/*for (i = 2; i <= 10; i++) {
  console.log(i);
}*/
/*let bandera = true;
let contador = 0;
while (bandera) {
  contador++;
  if (contador == 10) {
    bandera = false;
  }
  console.log(contador);
}*/
//objetos y clases
const usuario = {
  nombre: "jhon",
  apellido: "mendez",
  edad: 45,
  peliculas: { nombe: "RAMBO" },
};
console.log(usuario.apellido);
console.log(usuario["nombre"]);
usuarioJSON = JSON.stringify(usuario);
usuarioObjeto = JSON.parse(usuarioJSON);

console.log(usuarioJSON);
console.log(usuarioObjeto);

//estructuras de datos
var personas = [
  ["jhon", "45"],
  ["daniel", "20"],
  ["manuela", "45"],
  ["felipe", "78"],
];
console.log(personas[2]);
personas.push("jhossed");
personas.push("alexander");
personas.pop();
for (let i = 0; i < personas.length; i++) {
  console.log(personas[i][1]);
}
