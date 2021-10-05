let cuposTotales = 10; // numero de cupos maximo

// la suma de los siguientes tres numeros debe ser menor al cupo total
const primerResta = 4; //valor que resta del cupo total luego del primer periodo de tiempo
const segundaResta = 2; //valor que resta del cupo restante luego del segundo periodo de tiempo
const tercerResta = 3; //valor que resta del cupo restante luego del tercer periodo de tiempo

const tiempo1 = 5; //primer tiempo en segundos
const tiempo2 = 120; //segundo tiempo en segundos
const tiempo3 = 150; //tercer tiempo en segundos

let vacantes = JSON.parse(localStorage.getItem('cupos'));

const cupos = $('#cont-cupos__vacantes');

if (!vacantes) {
	vacantes = cuposTotales;
	localStorage.setItem('cupos', JSON.stringify(vacantes));
}
function resta1() {
	let vac = JSON.parse(localStorage.getItem('cupos'));
	console.log(`localstorage:${vac}`);
	let resta = vac - primerResta;
	cupos.empty();
	cupos.append(resta);
	$('.cont-cupos__p').toggleClass('anim-sobresalir1');
	localStorage.setItem('cupos', JSON.stringify(resta));
	console.log(`1: ${resta}`);
}
function resta2() {
	let vac = JSON.parse(localStorage.getItem('cupos'));
	console.log(`localstorage:${vac}`);
	$('.cont-cupos__p').toggleClass('anim-sobresalir1');
	let resta = vac - segundaResta;
	cupos.empty();
	cupos.append(resta);
	$('.cont-cupos__p').toggleClass('anim-sobresalir2');
	localStorage.setItem('cupos', JSON.stringify(resta));
	console.log(`2: ${resta}`);
}
function resta3() {
	let vac = JSON.parse(localStorage.getItem('cupos'));
	console.log(`localstorage:${vac}`);
	$('.cont-cupos__p').toggleClass('anim-sobresalir2');
	let resta = vac - tercerResta;
	console.log(`resta es: ${resta}`);
	cupos.empty();
	// cupos.append(resta);
	if (resta == 1) {
		$('#cont-cupos__item').empty();
		// $('#cont-cupos__item').append(' cupo disponible');
		$('#cont-cupos__item').append('Últimos cupos disponibles');
	}
	$('.cont-cupos__p').toggleClass('anim-sobresalir3');
	localStorage.setItem('cupos', JSON.stringify(resta));
	console.log(`3: ${resta}`);
}
function contCupos() {
	if (primerResta + segundaResta + tercerResta < vacantes) {
		timer1();
		timer2();
		timer3();
	} else if (segundaResta + tercerResta < vacantes) {
		timer2();
		timer3();
	} else if (tercerResta < vacantes) {
		timer3();
	}
}

cupos.append(vacantes);

console.log(`Cupos Totales: ${vacantes}`);

function timer1() {
	//Ponlo en segundos y luego en la función ya lo comparas en milisegundos
	let countDownTime = tiempo1;
	//La fecha inicial
	let date = new Date();
	date = date.getTime();
	console.log(date);
	let check = setInterval(function () {
		//La fecha actual
		let nowDate = new Date();
		nowDate = nowDate.getTime();
		//Calculas la diferencia
		let difference = nowDate - date;
		//Lo comparas
		if (difference >= countDownTime * 1000) {
			//Enviar el mensaje o hacer lo que quieras
			resta1();
			//Limpias el intervalo
			clearInterval(check);
		}
	}, true);
}
function timer2() {
	//Ponlo en segundos y luego en la función ya lo comparas en milisegundos
	let countDownTime = tiempo2;
	//La fecha inicial
	let date = new Date();
	date = date.getTime();
	console.log(date);
	let check = setInterval(function () {
		//La fecha actual
		let nowDate = new Date();
		nowDate = nowDate.getTime();
		//Calculas la diferencia
		let difference = nowDate - date;
		//Lo comparas
		if (difference >= countDownTime * 1000) {
			//Enviar el mensaje o hacer lo que quieras
			resta2();
			//Limpias el intervalo
			clearInterval(check);
		}
	}, true);
}
function timer3() {
	//Ponlo en segundos y luego en la función ya lo comparas en milisegundos
	let countDownTime = tiempo3;
	//La fecha inicial
	let date = new Date();
	date = date.getTime();
	console.log(date);
	let check = setInterval(function () {
		//La fecha actual
		let nowDate = new Date();
		nowDate = nowDate.getTime();
		//Calculas la diferencia
		let difference = nowDate - date;
		//Lo comparas
		if (difference >= countDownTime * 1000) {
			//Enviar el mensaje o hacer lo que quieras
			resta3();
			//Limpias el intervalo
			clearInterval(check);
		}
	}, true);
}
if (primerResta + segundaResta + tercerResta >= cuposTotales) {
	console.log(
		'la suma de los valores a restar es igual o mayor al cupo total - reducir los valores a restar en la linea 4, 5 y 6'
	);
} else {
	contCupos();
}
if (vacantes === 1) {
	$('#cont-cupos__item').empty();
	cupos.empty();
	// $('#cont-cupos__item').append(' cupo disponible');
	$('#cont-cupos__item').append('Últimos cupos disponibles');
}
