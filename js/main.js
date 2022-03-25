let menu = document.querySelector('.hamburger-menu');
console.log(menu);

let burgerIcon = document.querySelector('.fa-bars');
console.log(burgerIcon);

let escIcon = document.querySelector('.fa-times');

burgerIcon.addEventListener('click', function(){
    menu.style.display = 'block';
});

escIcon.addEventListener('click', function(){
    menu.style.display = 'none';
});