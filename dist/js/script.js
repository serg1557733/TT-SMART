//hamburger menu activation classes
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const olerlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click',() => {
    menu.classList.add('active')
    hamburger.classList.add('hamburger_active')
    olerlay.classList.add('menu__overlay_active')

});
closeElem.addEventListener('click',() => {
    menu.classList.remove('active')
    hamburger.classList.remove('hamburger_active')
    olerlay.classList.remove('menu__overlay_active')
});
