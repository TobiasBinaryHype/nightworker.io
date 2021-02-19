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

// Random Hero Stars (with animation)
// const hero = document.querySelector('.hero');
// const limit = 40;

// console.log({ hero });

// function addStar() {
// 	let star = document.createElement('div');
// 	star.classList.add('star');

// 	star.style.left = getRandomNumber(0, hero.offsetWidth) + 'px';
// 	star.style.top = getRandomNumber(0, hero.offsetHeight) + 'px';
// 	star.style.width = getRandomNumber(2, 8) + 'px';
// 	star.style.height = star.style.width;

// 	hero.appendChild(star);

// 	// setInterval(() => {
// 	// 	star.classList.add('scale');

// 	// 	setTimeout(() => {
// 	// 		star.classList.remove('scale');
// 	// 	}, 5000);
// 	// }, getRandomNumber(30, 5) * 1000);
// }

// function animateStars(stars) {
// 	return setInterval(() => {
// 		stars.forEach((star) => {
// 			const newLeft = parseInt(star.style.left.replace('px', '')) + 1;

// 			if (newLeft > hero.offsetWidth) {
// 				star.style.left = 0 + 'px';
// 			} else {
// 				star.style.left = newLeft + 'px';
// 			}
// 		});
// 	}, 30);
// }
// function getRandomNumber(max, min = 0) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let index = 0; index < limit; index++) {
// 	addStar();
// }
// animateStars(document.querySelectorAll('.star'));
