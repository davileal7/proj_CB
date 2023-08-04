let btn3 = document.querySelector(".mobile-menu-icon3")
let menuMobile3 = document.querySelector(".mobile-menu3")


btn3.addEventListener('click', ()=> {
   if (menuMobile3.classList.contains('open3')) {
        menuMobile3.classList.remove('open3')
        document.querySelector(".icon3").src = 'menu_icon/menu_white_36dp galeria.svg'
   } else {
    menuMobile3.classList.add('open3')
    document.querySelector(".icon3").src = 'menu_icon/close_white_36dp galeria.svg'
   }  
})
