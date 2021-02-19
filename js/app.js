// Smooth Scroll Jump Marker
document.querySelectorAll('a').forEach((element) => {
	element.addEventListener('click', (event) => {
		const hash = event.target.hash;

		if (hash !== '') {
			event.preventDefault();
			document.querySelector(hash).scrollIntoView({
				behavior: 'smooth',
			});
		}
	});
});