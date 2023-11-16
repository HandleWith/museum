const welcome__btn = document.querySelector('.welcome__bt')
const iframe = document.querySelector('.welcome__iframe')
const cards__link = document.querySelector('.cards__link')
const cards__iframe1 = document.querySelector('.cards__iframe1')
const cards__iframe2 = document.querySelector('.cards__iframe2')
const cards__iframe3 = document.querySelector('.cards__iframe3')
const cards__iframe4 = document.querySelector('.cards__iframe4')
const cards__iframe5 = document.querySelector('.cards__iframe5')
const cards__iframe6 = document.querySelector('.cards__iframe6')
const cards__link1 = document.querySelector('.link1')
const cards__link2 = document.querySelector('.link2')
const cards__link3 = document.querySelector('.link3')
const cards__link4 = document.querySelector('.link4')
const cards__link5 = document.querySelector('.link5')
const cards__link6 = document.querySelector('.link6')

function openIframe() {
    iframe.style.display = 'block'
}

function closeIframe(e) {
    if(e.keyCode === 27) {
        iframe.style.display = 'none'
        cards__iframe1.style.display = 'none'
        cards__iframe2.style.display = 'none'
        cards__iframe3.style.display = 'none'
        cards__iframe4.style.display = 'none'
        cards__iframe5.style.display = 'none'
        cards__iframe6.style.display = 'none'
    }
}

function openIframe_cards1() {
    cards__iframe1.style.display = 'block'
}
function openIframe_cards2() {
    cards__iframe1.style.display = 'block'
}
function openIframe_cards3() {
    cards__iframe1.style.display = 'block'
}
function openIframe_cards4() {
    cards__iframe1.style.display = 'block'
}
function openIframe_cards5() {
    cards__iframe1.style.display = 'block'
}
function openIframe_cards6() {
    cards__iframe1.style.display = 'block'
}

welcome__btn.addEventListener('click', openIframe)
document.addEventListener('keyup', closeIframe)
cards__link1.addEventListener('click', openIframe_cards1)
cards__link2.addEventListener('click', openIframe_cards2)
cards__link3.addEventListener('click', openIframe_cards3)
cards__link4.addEventListener('click', openIframe_cards4)
cards__link5.addEventListener('click', openIframe_cards5)
cards__link6.addEventListener('click', openIframe_cards6)

