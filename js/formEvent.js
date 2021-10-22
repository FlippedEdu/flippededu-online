const iframe = document.getElementById('contactform123');
var elmnt = iframe.contentWindow.document.getElementById('form');

function algo() {
	console.log('logrado');
}

elmnt.addEventListener('submit', algo);
