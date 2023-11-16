const BuyNowBtn = document.querySelector('.tickets__total__bt')
const Form = document.querySelector('.tickets__form')
const closeBtn = document.querySelector('.close__form')
const main = document.querySelector('.main')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

const date = document.querySelector('.left__date')
const time = document.querySelector('.left__time')

function formHide() {
    Form.style.transform = 'translate(0, -50%)'
    overlay.style.display = 'block'
}

function closeForm() {
    Form.style.transform = 'translate(-200%, -50%)'
    overlay.style.display = 'none'
}



BuyNowBtn.addEventListener('click', formHide)
closeBtn.addEventListener('click', closeForm)
overlay.addEventListener('click', closeForm)
