const burgerBtn = document.querySelector('.nav__burger-btn');
const mobileBtn = document.querySelector('.nav__mobile-btn');
const mobileNav = document.querySelector('.nav__mobile');
const links = document.querySelectorAll('.mobile-link');

// NAV*****
const mobileNavHandler = () => {
	mobileNav.classList.remove('closeNavAnimation');
	mobileNav.classList.add('openNavAnimation');
	deleteAnimation();
};
const deleteAnimation = () => {
	links.forEach((link) =>
		link.addEventListener('click', () => {
			mobileNav.classList.remove('openNavAnimation');
			mobileNav.classList.add('closeNavAnimation');
		})
	);
};
const closeNav = () => {
	mobileNav.classList.remove('openNavAnimation');
	mobileNav.classList.add('closeNavAnimation');
};

// SLIDER*****

const sliderImages = document.querySelectorAll('.img');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
let sliderPosition = 0;

for (const img of sliderImages) {
	console.log(`Zdjęcie nr ${img}`);
}
const sliderRight = () => {
	++sliderPosition;
	sliderImages.forEach(
		(img) => (img.style.transform = `translateX(-${sliderPosition}00%)`)
	);
	if (sliderPosition === 7) {
		rightBtn.disabled = true;
		rightBtn.classList.add('disabled');
	}
	resetDisabledBtns()
};
const sliderLeft = () => {
	--sliderPosition;
	sliderImages.forEach(
		(img) => (img.style.transform = `translateX(-${sliderPosition}00%)`)
		);
	if (sliderPosition === 0) {
		leftBtn.disabled = true;
		leftBtn.classList.add('disabled');
	} 
	resetDisabledBtns()
};
const resetDisabledBtns = () => {
	if (sliderPosition < 7) {
		rightBtn.disabled = false;
		rightBtn.classList.remove('disabled')
	}
	if (sliderPosition > 0) {
		leftBtn.disabled = false;
		leftBtn.classList.remove('disabled')
	}

}
// leftBtn.addEventListener('click', sliderLeft)
// rightBtn.addEventListener('click', sliderRight);

// EventListeners *****

burgerBtn.addEventListener('click', mobileNavHandler);
mobileBtn.addEventListener('click', closeNav);
