// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const top = document.querySelector('#btn-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        top.classList.remove('hidden');
        top.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        top.classList.add('hidden');
        top.classList.remove('flex');
    }
}
// Hamburger Menu
const hamburgerMenu = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburgerMenu.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Close Hamburger
window.addEventListener('click', function(e) {
    if (e.target != hamburgerMenu && e.target != navMenu) {
        hamburgerMenu.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark Mode Toggle
const btnDark = document.querySelector('#darkTheme');
const html = document.querySelector('html');

btnDark.addEventListener('click', function () {
    if (btnDark.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }
    else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    btnDark.checked = true;
} else {
    btnDark.checked = false;
}
