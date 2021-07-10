//##################################### mobile nav open/close

const menuOpenBtn = document.querySelector('#mobile-nav-open');
const menuCloseBtn = document.querySelector('#mobile-nav-close');
const mobileMenu = document.querySelector('#nav-mobile');
const blackBg = document.querySelector('#black-cover');
const body = document.querySelector('body');
const govIcons = document.querySelector('#gov-icons');

function closeMenu() {
  mobileMenu.classList.add('scale-0');
  blackBg.classList.add('hidden');
  body.classList.remove('overflow-y-hidden');
  govIcons.style.visibility = 'visible';
}

menuOpenBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('scale-0');
  blackBg.classList.remove('hidden');
  body.classList.add('overflow-y-hidden');
  govIcons.style.visibility = 'hidden';
});

blackBg.addEventListener('click', closeMenu);

menuCloseBtn.addEventListener('click', closeMenu);

//##################################### Footer - current year

const yearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;

//##################################### go to top button

const header = document.querySelector('#header-wrap');
const goTopBtn = document.querySelector('#goTopBtn');
const options = {
  root: null,
  threshold: 0,
  rootMargin: '-250px', // from header bottom -150px, isintersecting boolean changes its state
};

const observer = new IntersectionObserver((entry, observer) => {
  const isIntersecting = entry[0].isIntersecting;

  if (isIntersecting) {
    goTopBtn.style.opacity = 0;
    goTopBtn.style.pointerEvents = 'none';
  } else {
    goTopBtn.style.opacity = 1;
    goTopBtn.style.pointerEvents = 'all';
  }
}, options);

observer.observe(header);
