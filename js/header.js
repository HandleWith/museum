const burger = document.querySelector('.header_burger')
const menu = document.querySelector('.burger__menu')
const item = document.querySelector('.menu__link')
const velcome__content = document.querySelector('.welcome__content')
const bod = document.querySelector('main')
const s68Menu = document.querySelector('.s68__block')
const topbtn = document.querySelector('.top__btn')

burger.addEventListener('click', openMenu)
item.addEventListener('click', openMenu)
bod.addEventListener('click', closeMenu)
document.addEventListener('scroll', hideBtn)
topbtn.addEventListener('click', toTop)

function openMenu() {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
    velcome__content.classList.toggle('active__welcome')
}

function closeMenu() {
    menu.classList.remove('active')
    burger.classList.remove('active')
    velcome__content.classList.remove('active__welcome')
}

window.addEventListener('resize' , showScreenWidth)

function showScreenWidth() {
    let x = window.screen.availWidth
    if(x<910) {
        s68Menu.style.display = 'block'
    }
    else if(x>910) {
        s68Menu.style.display = 'none'
    }
}

function hideBtn() {
    if(document.documentElement.scrollTop > 30) {
        topbtn.style.transform = 'translateY(0)'
    }
    else {
        topbtn.style.transform = 'translateY(100vh)'
    }
}

function toTop() {
    document.documentElement.scrollTop = 0
}




