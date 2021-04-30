// Toggle menu mobile
const toolbar = document.querySelector('.sidebar-tools');

function toggleMobileMenu() {
	toolbar.classList.toggle('show');
}
const button = document.querySelector('.mobile-menu-btn');
button.addEventListener('click', toggleMobileMenu);

// Toggle clase .active en mobile
function styleChangeOnMobile(x) {
	const btn_estadoCuenta = document.querySelector('#estado-cuenta');
	const btn_retribucion = document.querySelector('#retribucion');
	if (x.matches) {
		btn_estadoCuenta.classList.add('active');
		btn_retribucion.classList.remove('active');
	} else {
		btn_estadoCuenta.classList.remove('active');
		btn_retribucion.classList.add('active');
		toolbar.classList.remove('show');
	}
}

const x = window.matchMedia('(min-width: 768px)');
styleChangeOnMobile(x);
x.addEventListener('change', styleChangeOnMobile);
