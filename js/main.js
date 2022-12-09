const control_toggle = document.querySelector('.toggle');
const main = document.querySelector('.main');
const cards = document.querySelector('.cards');
const section = document.querySelector('.section');

control_toggle.addEventListener('click', ()=>{
    control_toggle.classList.toggle('toggle--dark-mode');
    main.classList.toggle('main--dark');
    cards.classList.toggle('cards--dark');
    section.classList.toggle('section--dark');
});