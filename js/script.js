const hamburger = document.querySelector('.header__burger '),
    menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item');
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('header__burger_active');
    menu.classList.toggle('menu_active');
})
menuItem.forEach(item=>{
   item.addEventListener('click', ()=>{
        hamburger.classList.toggle('header__burger_active');
        menu.classList.toggle('menu_active');
   })
})