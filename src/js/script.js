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
//log in  
const logIn = document.querySelector('.login');
const formLogin = document.querySelector('.form__login');
const closeElemLog = document.querySelector('.menu__close_login');

logIn.addEventListener('click', ()=>{
    formLogin.classList.add('form__login_active')
    olerlay.classList.add('menu__overlay_active')
});
closeElemLog.addEventListener('click',() => {
    formLogin.classList.remove('form__login_active')
    olerlay.classList.remove('menu__overlay_active')
});

