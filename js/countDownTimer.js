/* COUNTDOWN PERSISTENTE. SE GUARDA EN EL LOCALSTORAGE */

/*Verificar sesion - Si es primera vez que se carga la pagina, se guarda la fecha de ese instante como inicial */

if (!localStorage.getItem('FechaIngreso')) {
	localStorage.setItem('FechaIngreso', Date.now());
}

let numeroIni = localStorage.getItem('FechaIngreso'); //Guardar la fecha inicial de ingreso en una variable
let inicio = parseInt(numeroIni); //Convertir el string de la variable a entero
var tiempoEnHoras = 3600000 * 48; //Cantidad de horas que se suman a la fecha inicial

// Setear la fecha objetivo (inicial + horas agregadas)
var countDownDate = new Date(inicio + tiempoEnHoras).getTime();

// Actualizar la cuenta en cada segundo
var x = setInterval(function () {
	// Obtener la fecha y tiempo actual
	var now = new Date().getTime();

	// Calcular la distancia de tiempo entre la fecha inicial y la objetivo
	var distance = countDownDate - now;

	// Calculador de dias, horas, minutos y segundos
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Mostrar el resultado en un elemento con id=demo

	if (days > 0) {
		let cont = 0;
		do {
			days--;
			cont++;
		} while (days > 0);
		document.getElementById('countDownTimer').innerHTML =
			hours + 24 * cont + 'h ' + minutes + 'm ' + seconds + 's ';
	} else document.getElementById('countDownTimer').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's ';

	// Si el contador llega a 0, mostrar el texto
	if (distance < 1) {
		clearInterval(x);
		document.getElementById('countDownTimer').innerHTML = 'INSCRIBETE';
		localStorage.clear();
	}
}, 1000); //Cambiar cada 1000mlseg = 1seg
