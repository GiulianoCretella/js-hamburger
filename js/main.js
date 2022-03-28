let menu = document.querySelector('.hamburger-menu');
console.log(menu);

let burgerIcon = document.querySelector('.header-right > a');
console.log(burgerIcon);

let escIcon = document.querySelector('.hamburger-menu > a');

burgerIcon.addEventListener('click', function(){
    menu.classList.add('active');
});

escIcon.addEventListener('click', function(){
    menu.classList.remove('active');
});

// function toggleMenu(){
//     menu.classList.toggle('active');
// };

// burgerIcon.addEventListener('click', toggleMenu);
// escIcon.addEventListener('click', toggleMenu);