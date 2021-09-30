let verificador = false;
// animación para logo de whatsapp
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#whatsapp').fadeIn();
		} else {
			$('#whatsapp').fadeOut();
		}
	});
});
// scroll active del nav
$('#nav__ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 0.3,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});

// funcionabilidad del botón hamburguesa del menu de navegación
const btnMenu = $('#btn-menu');

function menu() {
	if (verificador) {
		$('#btn-menu__lineas').css({
			'-webkit-transform': 'rotate(0deg)',
			'-o-transform': 'rotate(0deg)',
			'-moz-transform': 'rotate(0deg)',
			'-ms-transform': 'rotate(0deg)',
			transform: 'rotate(0deg)',
		});
		$('#btn-menu__lineas--sup').css({
			top: '10px',
			'-webkit-transform': 'rotate(0deg)',
			'-o-transform': 'rotate(0deg)',
			'-moz-transform': 'rotate(0deg)',
			'-ms-transform': 'rotate(0deg)',
			transform: 'rotate(0deg)',
		});
		$('#btn-menu__lineas--inf').css({
			top: '-10px',
			'-webkit-transform': 'rotate(0deg)',
			'-o-transform': 'rotate(0deg)',
			'-moz-transform': 'rotate(0deg)',
			'-ms-transform': 'rotate(0deg)',
			transform: 'rotate(0deg)',
		});
		$('#btn-menu').css({
			'box-shadow': ' 0 0 0 0vw rgba(4, 28, 100, 0)',
			'background-color': 'rgba(4, 28, 100, 0)',
			// 'box-shadow': ' 0 0 0 0vw rgba(121, 127, 242, 0)',
			// 'background-color': 'rgba(121, 127, 242, 0)',
		});
		$('#btn__ul').css({
			display: 'none',
			opacity: 0,
		});
		verificador = false;
	} else {
		$('#btn-menu__lineas').css({
			'-webkit-transform': 'rotate(45deg)',
			'-o-transform': 'rotate(45deg)',
			'-moz-transform': 'rotate(45deg)',
			'-ms-transform': 'rotate(45deg)',
			transform: 'rotate(45deg)',
		});
		$('#btn-menu__lineas--sup').css({
			top: 0,
			'-webkit-transform': 'rotate(90deg)',
			'-o-transform': 'rotate(90deg)',
			'-moz-transform': 'rotate(90deg)',
			'-ms-transform': 'rotate(90deg)',
			transform: 'rotate(90deg)',
		});
		$('#btn-menu__lineas--inf').css({
			top: 0,
			'-webkit-transform': 'rotate(90deg)',
			'-o-transform': 'rotate(90deg)',
			'-moz-transform': 'rotate(90deg)',
			'-ms-transform': 'rotate(90deg)',
			transform: 'rotate(90deg)',
		});
		$('#btn-menu').css({
			'box-shadow': ' 0 0 0 200vw rgba(4, 28, 100, 0.90)',
			'background-color': 'rgba(4, 28, 100, 0.90)',
			// 'box-shadow': ' 0 0 0 200vw rgba(121, 127, 242, 0.90)',
			// 'background-color': 'rgba(121, 127, 242, 0.90)',
		});
		$('#btn__ul').css({
			display: 'flex',
			opacity: 1,
		});
		verificador = true;
	}
}
btnMenu.on('click', menu);
