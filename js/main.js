// mobile nav open/close

const menuOpenBtn = document.querySelector('#mobile-nav-open')
const menuCloseBtn = document.querySelector('#mobile-nav-close')
const mobileMenu = document.querySelector('#nav-mobile')
const blackBg = document.querySelector('#black-cover')
const body = document.querySelector('body')

function closeMenu() {
  mobileMenu.classList.add('scale-0')
  blackBg.classList.add('hidden')
  body.classList.remove('overflow-y-hidden')
}

// menuOpenBtn.addEventListener('click', () => {
//   mobileMenu.classList.remove('translate-x-full')
//   blackBg.classList.remove('hidden')
//   body.classList.add('overflow-y-hidden')
// })

menuOpenBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('scale-0')
  blackBg.classList.remove('hidden')
  body.classList.add('overflow-y-hidden')
})

blackBg.addEventListener('click', closeMenu)

menuCloseBtn.addEventListener('click', closeMenu)

// Footer - current year

const yearElement = document.querySelector('#year')
const currentYear = new Date().getFullYear()

yearElement.textContent = currentYear
