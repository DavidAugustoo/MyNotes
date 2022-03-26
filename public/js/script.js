let menuMobileIcon = document.querySelector('.menu-hamburguer');
let menuMobileArea = document.querySelector('.nav-mobile');

menuMobileIcon.addEventListener('click', () => {
   if(menuMobileArea.classList.contains('closed')) {
    menuMobileArea.classList.remove('closed');
    menuMobileArea.classList.add('open');
   } else {
    menuMobileArea.classList.remove('open');
    menuMobileArea.classList.add('closed');
   }
})