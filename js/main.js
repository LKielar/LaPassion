const burgerBtn = document.querySelector('.nav__burger-btn');
const mobileBtn = document.querySelector('.nav__mobile-btn');
const mobileNav = document.querySelector('.nav__mobile');
const links = document.querySelectorAll('.mobile-link');

// NAV*****
const openNav = () => {
	mobileNav.classList.remove('closeNavAnimation');
	mobileNav.classList.add('openNavAnimation');
	deleteAnimation();
};
const closeNav = () => {
	mobileNav.classList.remove('openNavAnimation');
	mobileNav.classList.add('closeNavAnimation');
};
const deleteAnimation = () => {
	links.forEach((link) =>
		link.addEventListener('click', () => {
			mobileNav.classList.remove('openNavAnimation');
			mobileNav.classList.add('closeNavAnimation');
		})
	);
};
// ABOUT US scrollspy*****

const navHeight = document.querySelector('.nav-section')
const scrollSection = document.querySelector('.main__aboutus')
const scrollHandler = () => {
	const currentHeight = navHeight.clientHeight
	scrollSection.style.scrollMarginTop = `${currentHeight + 1}px`;
	console.log(currentHeight);
}
scrollHandler()

// FOOTER DATE *****
const currentYear = document.querySelector('.year');

const getCurrentYear = () => {
	const year = new Date().getFullYear();
	currentYear.textContent = year;
};
getCurrentYear();

// EventListeners *****

burgerBtn.addEventListener('click', openNav);
mobileBtn.addEventListener('click', closeNav);
