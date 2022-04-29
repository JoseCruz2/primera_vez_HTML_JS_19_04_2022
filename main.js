let 
  nombre,
  edad,
  altura,
  soyEstudiante,
  cuentaBancaria,
  direccion;

let descripcion = {//object
  Tipopelo:"ondulado",
  ojos: 2,
  tamañoNariz: 3.5
};

let pasatiempos = [];

pasatiempos["Pasatiempo importante"] =  `Leer`;
pasatiempos[4] =  `Hacer Tareas`;
pasatiempos[5] =  `Jugar Videojuegos`;
pasatiempos[6] =  `Montar Cicla`;

nombre = `Jose Fernando Cruz Carrillo`;
edad = 14;
altura = 1.72;
soyEstudiante = true;
cuentaBancaria = null;
direccion;

console.log(`Nombre: ${nombre}`);
console.log(`%cEdad: %c${edad}`,"font-family:cursive;", "color:#7199f8; font-family:sans-serif;");
console.log(`%cAltura: `,"font-family:cursive;",altura);
console.log(`%cSoy el estudiante: ${soyEstudiante}`,"font-family:cursive;");
console.log(cuentaBancaria);
console.log(direccion);
console.table([descripcion]);
console.log(pasatiempos);





  
