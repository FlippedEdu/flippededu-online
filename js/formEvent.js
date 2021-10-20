/*let divAzulVacio = document.getElementsByClassName("containerVacioAzul");

let miFormulario = document.getElementById("form");


const validarFormulario= (e)=>{
  e.preventDefault();
  divAzulVacio.style.top = "0";
  divAzulVacio.style.height = "1000px";
  divAzulVacio.style.background = "green";
}


miFormulario.addEventListener("submit",validarFormulario);*/


  const iframe = document.getElementById("contactform123");
  var elmnt = iframe.contentWindow.document.getElementById("form");

  function algo (){
    console.log("logrado");
  }

elmnt.addEventListener("submit",algo);




