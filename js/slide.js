// slider de cursos
// https://sachinchoolur.github.io/lightslider/examples.html

$(document).ready(function () {
	$('#autoWidth').lightSlider({
		autoWidth: true,
		loop: false,
		onSliderLoad: function () {
			$('#autoWidth').removeClass('cS-hidden');
		},
	});
});
