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
// ABOUT US scrollspy*****
const navLink = document.querySelectorAll('.scroll');
const nav = document.querySelector('.nav-section');
const aboutUs = document.getElementById('aboutus');
const navHeight = nav.scrollHeight;
const scrollHandler = () => {
	aboutUs.style.scrollMarginTop = `${navHeight - 1}px`;
};

navLink.forEach((link) => {
	link.addEventListener('click', scrollHandler);
});

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
const submitBtn = document.querySelector('.submit-btn');
// MODAl
const modal = document.querySelector('.modal');
const submittedIconCircle = document.querySelector('.circle');
const submittedIconCheck = document.querySelector('.check');

const validateEmail =(email) => { 
	const regex = /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
	return regex.test(email.value); 
}
// submit form function
const formHandler = () => {
	if (
		inputName.value != '' &&
		inputEmail.value != '' &&
		inputText.value != ''
	) {
		validateEmail(inputEmail)
		resetForm();
		modal.style.visibility = 'visible';
		submittedIconCircle.classList.add('active-dash-circle');
		submittedIconCheck.classList.add('active-check');
		setTimeout(modalHandler, 3000);
	} else {
		errorMsg.style.display = 'block';
		allInputs.forEach((input) => {
			if (input.value === '') {
				input.classList.add('error-outline');
			}
		});
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
		formHandler();
	});
}
// EventListeners **********

burgerBtn.addEventListener('click', openNav);
mobileBtn.addEventListener('click', closeNav);
