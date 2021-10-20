let divAzulVacio = document.getElementsByClassName("containerVacioAzul");
let miFormulario = document.getElementById("contactform123");


const validarFormulario= (e)=>{
  e.preventDefault();
  divAzulVacio.style.height = "1000px";
}


miFormulario.addEventListener("submit",validarFormulario);

