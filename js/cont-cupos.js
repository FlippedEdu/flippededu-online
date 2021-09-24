let cuposTotales = 10; // numero de cupos maximo

// la suma de los siguientes tres numeros debe ser menor al cupo total
const primerResta = 4; //valor que resta del cupo total luego del primer periodo de tiempo
const segundaResta = 2; //valor que resta del cupo restante luego del segundo periodo de tiempo
const tercerResta = 3; //valor que resta del cupo restante luego del tercer periodo de tiempo

const tiempo1 = 3000; //primer tiempo
const tiempo2 = 6000; //segundo tiempo
const tiempo3 = 9000; //tercer tiempo

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
	cupos.append(resta);
	if (resta == 1) {
		$('#cont-cupos__item').empty();
		$('#cont-cupos__item').append(' cupo disponible');
	}
	$('.cont-cupos__p').toggleClass('anim-sobresalir3');
	localStorage.setItem('cupos', JSON.stringify(resta));
	console.log(`3: ${resta}`);
}
function contCupos() {
	if (primerResta + segundaResta + tercerResta < vacantes) {
		setTimeout(resta1, tiempo1);
		setTimeout(resta2, tiempo2);
		setTimeout(resta3, tiempo3);
	} else if (segundaResta + tercerResta < vacantes) {
		setTimeout(resta2, tiempo2);
		setTimeout(resta3, tiempo3);
	} else if (tercerResta < vacantes) {
		setTimeout(resta3, tiempo3);
	}
}

cupos.append(vacantes);

if (primerResta + segundaResta + tercerResta >= cuposTotales) {
	console.log(
		'la suma de los valores a restar es igual o mayor al cupo total - reducir los valores a restar en la linea 4, 5 y 6'
	);
} else {
	contCupos();
}
console.log(`coposTotales: ${vacantes}`);
if (vacantes === 1) {
	$('#cont-cupos__item').empty();
	$('#cont-cupos__item').append(' cupo disponible');
}
