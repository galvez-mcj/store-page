let burgerMenu = document.querySelector('.navbar-toggle')
let navbarMenu = document.querySelector('.navbar-menu')


burgerMenu.addEventListener('click', () => {
    console.log('burger clicked');
    navbarMenu.classList.toggle('open');
})

/* burgerMenu.onclick = () => {
    burgerMenu.classList.toggle();
    navbarMenu.classList.toggle('open');
} */