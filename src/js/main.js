const burgerBtn = document.querySelector('.nav__burger-btn');
const mobileBtn = document.querySelector('.nav__mobile-btn');
const mobileNav = document.querySelector('.nav__mobile');
const links = document.querySelectorAll('.mobile-link');
const reviews = document.querySelectorAll('.main__review');
const sections = document.querySelectorAll('.section');
const navLink = document.querySelectorAll('.navbar-link');
const contactLink = document.querySelector('.contact-link');
const currentYear = document.querySelector('.year');
const services = document.querySelectorAll('.main__about-services--list li');
const servicesSection = document.querySelector('.main__about-services');

//******************** NAV ********************
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

// ******************** Cards Animation ********************

const reviewsAnimationHandler = () => {
	reviews.forEach((review) => {
		const newOffset = review.offsetTop - window.innerHeight + 100;
		if (window.scrollY > newOffset) {
			review.classList.add('review-animate-left');
		}
	});
};

// ******************** Intersection Observer ********************

let options = {
	root: null,
	rootMargin: '0px',
	threshold: 1.0,
};
const observerHandler = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting === true) {
			navLink.forEach((link) => {
				link.textContent === entry.target.id
					? link.classList.add('active')
					: link.classList.remove('active');
			});
		}
	});
};
const observer = new IntersectionObserver(observerHandler, options);
sections.forEach((section) => {
	observer.observe(section);
});
// Gold color link on subpage contact
if (contactLink != null) {
	contactLink.classList.add('active');
}

// ******************** FOOTER DATE ********************

const getCurrentYear = () => {
	const year = new Date().getFullYear();
	currentYear.textContent = year;
};

// ****************** Animation ******************

const servicesAnimation = () => {
	for (let i = 0; i < services.length; i++) {
		((i) => {
			setTimeout(() => {
				services[i].classList.add('animateServices');
			}, 120 * i);
		})(i);
	}
};
const servicesAnimationHandler = () => {
	const offset = servicesSection.offsetTop - window.innerHeight + 120;
	if (window.scrollY > offset) {
		servicesAnimation();
	}
};

// ******************** hiding nav when scrolling down ********************

let prevScrollposition = window.pageYOffset;
window.onscroll = function () {
	if (window.innerWidth >= 768) return;
	const currentScrollPosition = window.pageYOffset;
	if (prevScrollposition > currentScrollPosition) {
		document.querySelector('.nav-section').style.top = '-1px';
	} else {
		document.querySelector('.nav-section').style.top = '-85px';
	}
	prevScrollposition = currentScrollPosition;
};

//  ************* Listeners **************
burgerBtn.addEventListener('click', openNav);
mobileBtn.addEventListener('click', closeNav);
window.addEventListener('scroll', reviewsAnimationHandler);
if (servicesSection != null) {
	window.addEventListener('scroll', servicesAnimationHandler);
}
getCurrentYear();
