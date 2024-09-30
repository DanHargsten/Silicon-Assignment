const menuBtn = document.querySelector('.navbar__menu-toggle')
const mainMenu = document.querySelector('#main-menu')

menuBtn.addEventListener('click', () => {
   const isExpended = menuBtn.getAttribute('aria-expanded') === 'true'

   if(isExpended) {
      menuBtn.setAttribute('aria-expanded', false)
      mainMenu.addEventListener('animationend', () => {
         mainMenu.classList.add('hide')
      }, { once: true })
   }
   else {
      mainMenu.classList.remove('hide')
      menuBtn.setAttribute('aria-expanded', true)
   }
})