let menu = document.querySelector('.nav-container i');
let nav = document.querySelector('.nav-items');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}