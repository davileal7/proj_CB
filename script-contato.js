let btn = document.querySelector(".mobile-menu-icon")
let menuMobile = document.querySelector(".mobile-menu")


btn.addEventListener('click', ()=> {
   if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector(".icon").src = 'menu_icon/menu_white_36dp.svg'
   } else {
    menuMobile.classList.add('open')
    document.querySelector(".icon").src = 'menu_icon/close_white_36dp.svg'
   }  
})
