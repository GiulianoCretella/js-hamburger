let menu = document.querySelector('.hamburger-menu');
console.log(menu);

let burgerIcon = document.querySelector('.header-right > a');
console.log(burgerIcon);

let escIcon = document.querySelector('.hamburger-menu > a');

burgerIcon.addEventListener('click', function(){
    menu.style.display = 'block';
});

escIcon.addEventListener('click', function(){
    menu.style.display = 'none';
});