/* Funcionalidad para los botones que despliegan información en FAQ */
var coll = document.getElementsByClassName('colapsar');
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('activo');
		var content = this.nextElementSibling;
		if (content.style.display === 'block') {
			content.style.display = 'none';
		} else {
			content.style.display = 'block';
		}
	});
}
