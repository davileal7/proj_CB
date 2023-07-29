let btn2 = document.querySelector(".mobile-menu-icon2")
let menuMobile2 = document.querySelector(".mobile-menu2")


btn2.addEventListener('click', ()=> {
   if (menuMobile2.classList.contains('open2')) {
        menuMobile2.classList.remove('open2')
        document.querySelector(".icon2").src = 'menu_icon/menu_white_36dp contato.svg'
   } else {
    menuMobile2.classList.add('open2')
    document.querySelector(".icon2").src = 'menu_icon/close_white_36dp contato.svg'
   }  
})
