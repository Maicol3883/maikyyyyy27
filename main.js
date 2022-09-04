//alert("hola soy maicol"); es una fusion para enviar mesaje  a la explorado



//const nombre = prompt( "cual es tu nombre");

//alert( "tu nombre" + nombre    );
 

const nombre= document.getElementById("nombre");
const apellido= document.getElementById("apellido");
const contrasena= document.getElementById("contrasena");
const email= document.getElementById("emali");
const btn = document.getElementById("btn");




btn.addEventListener("click", (e) => {

e.preventDefault();
console.log(nombre.value);
console.log(apellido.value);
console.log(contrasena.value);
console.log(email.value);
console.log(btn.value);

});

//alert("afdafsad")

