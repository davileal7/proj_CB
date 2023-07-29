let btn = document.querySelector(".mobile-menu-icon2")
let menuMobile = document.querySelector(".mobile-menu2")


btn.addEventListener('click', ()=> {
   if (menuMobile.classList.contains('open2')) {
        menuMobile.classList.remove('open2')
        document.querySelector(".icon").src = 'menu_icon/menu_white_36dp.svg'
   } else {
    menuMobile.classList.add('open2')
    document.querySelector(".icon").src = 'menu_icon/close_white_36dp.svg'
   }  
})
