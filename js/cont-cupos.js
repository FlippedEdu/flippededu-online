let cuposTotales = 10; // numero de cupos maximo
let vacantes = JSON.parse(localStorage.getItem('cupos'));

const tiempo1 = 3000; //primer tiempo
const tiempo2 = 6000; //segundo tiempo
const tiempo3 = 9000; //tercer tiempo

const primerResta = 4; //valor que resta del cupo total luego del primer periodo de tiempo
const segundaResta = 2; //valor que resta del cupo restante luego del segundo periodo de tiempo
const tercerResta = 3; //valor que resta del cupo restante luego del tercer periodo de tiempo

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
	localStorage.setItem('cupos', JSON.stringify(resta));
	console.log(`1: ${resta}`);
}
function resta2() {
	let vac = JSON.parse(localStorage.getItem('cupos'));
	console.log(`localstorage:${vac}`);
	let resta = vac - segundaResta;
	cupos.empty();
	cupos.append(resta);
	localStorage.setItem('cupos', JSON.stringify(resta));
	console.log(`2: ${resta}`);
}
function resta3() {
	let vac = JSON.parse(localStorage.getItem('cupos'));
	console.log(`localstorage:${vac}`);
	let resta = vac - tercerResta;
	cupos.empty();
	cupos.append(resta);
	if (resta == 1) {
		$('#cont-cupos__item').empty();
		$('#cont-cupos__item').append(' cupo disponible');
	}
	localStorage.setItem('cupos', JSON.stringify(resta));
	console.log(`3: ${resta}`);
}

function contCupos() {
	if (primerResta + segundaResta + tercerResta < vacantes) {
		setTimeout(resta1, tiempo1);
		setTimeout(resta2, tiempo2);
		setTimeout(resta3, tiempo3);
	} else {
		console.log(
			'la suma de los valores a restar es igual o mayor al cupo total - colocar valores de resta menores'
		);
	}
}

cupos.append(vacantes);
contCupos();
