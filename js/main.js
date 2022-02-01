const burgerBtn = document.querySelector('.nav__burger-btn');
const mobileBtn = document.querySelector('.nav__mobile-btn');
const mobileNav = document.querySelector('.nav__mobile');
const links = document.querySelectorAll('.mobile-link');

// NAV **********
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

// Intersection Observer *****
const sections = document.querySelectorAll('.section');
const navLink = document.querySelectorAll('.navbar-link');
const contactLink = document.querySelector('.navbar-link:last-child');

let options = {
	root: null,
	rootMargin: '0px',
	threshold: 1.0,
};
const observerHandler = (entries, observer) => {
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
// FOOTER DATE **********
const currentYear = document.querySelector('.year');

const getCurrentYear = () => {
	const year = new Date().getFullYear();
	currentYear.textContent = year;
};
getCurrentYear();

// FORM **********
const allInputs = document.querySelectorAll('.input');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#number');
const inputText = document.querySelector('#message');
const errorMsg = document.querySelector('.error-info');
const errorEmail = document.querySelector('.error-email');
const submitBtn = document.querySelector('.submit-btn');
const modal = document.querySelector('.modal');
const submittedIconCircle = document.querySelector('.circle');
const submittedIconCheck = document.querySelector('.check');

const validateEmail = (email) => {
	const regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regex.test(email)) {
		errorEmail.style.display = 'none';
		true;
	} else if (email != '') {
		inputEmail.classList.add('error-outline');
		errorEmail.style.display = 'block';
	}
};

const showError = () => {
	errorMsg.style.display = 'block';
	allInputs.forEach((input) => {
		if (input.value === '') {
			input.classList.add('error-outline');
		}
	});
};

const checkErrors = () => {
	let errors = 0;

	allInputs.forEach((input) => {
		if (input.classList.contains('error-outline')) {
			errors++;
		}
	});
	if (errors === 0) {
		modal.style.visibility = 'visible';
		submittedIconCircle.classList.add('active-dash-circle');
		submittedIconCheck.classList.add('active-check');
		setTimeout(modalHandler, 3000);
	}
};

const formCheck = () => {
	if (
		inputName.value != '' &&
		inputEmail.value != '' &&
		inputText.value != '' &&
		validateEmail(inputEmail.value)
		) {
		resetForm();
	} else {
		showError();
	}
};
// show modal after submit

const modalHandler = () => {
	modal.style.visibility = 'hidden';
};

// reset inputs and error msg after submit

const resetForm = () => {
	allInputs.forEach((input) => {
		input.value = '';
		input.classList.remove('error-outline');
	});
	inputPhone.value = '';
	errorMsg.style.display = 'none';
	errorEmail.style.display = 'none';
};

// clear inputs and error msg when typing ----------

const clearInputs = () => {
	allInputs.forEach((input) => {
		if (input.value != '') {
			input.classList.remove('error-outline');
		}
	});
	errorMsg.style.display = 'none';
	submittedIconCircle.classList.remove('active-dash-circle');
	submittedIconCheck.classList.remove('active-check');
};

allInputs.forEach((input) => {
	input.oninput = clearInputs;
});

//  -----------

if (submitBtn != null) {
	submitBtn.addEventListener('click', (e) => {
		e.preventDefault();
		formCheck();
		validateEmail(inputEmail.value);
		checkErrors();
	});
}
// EventListeners **********

burgerBtn.addEventListener('click', openNav);
mobileBtn.addEventListener('click', closeNav);
