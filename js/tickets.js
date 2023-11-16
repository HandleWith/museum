const ticketsBasic = document.querySelector('.basic__am')
const ticketsSenior = document.querySelector('.senior__am')
const ticketsChoiceBasic = document.querySelectorAll('.basic__btn')
const ticketsChoiceSenior = document.querySelectorAll('.senior__btn')
const ticketType = document.querySelectorAll('.tickets__input')
const total = document.querySelector('.total__value')

const formBasicText = document.querySelector('.basic__value')
const basicResult = document.querySelector('.basic__result')
const seniorResult = document.querySelector('.senior__result')
const formSeniorText = document.querySelector('.senior__value')

const formBasicTypeSum = document.querySelectorAll('.basic__span')
const formSeniorTypeSum = document.querySelectorAll('.senior__span')
const formBasicAmount = document.querySelector('.amount__basic')
const formSeniorAmount = document.querySelector('.amount__senior')
const formBasicBtn = document.querySelectorAll('.button__basic')
const formSeniorBtn = document.querySelectorAll('.button__senior')
const formTotal = document.querySelector('.total__summary__content')

const formDate = document.querySelector('.left__date')
const formTime = document.querySelector('.left__time')
const formName = document.querySelector('.left__name')
const formEmail = document.querySelector('.left__email')
const formTel = document.querySelector('.left__tel')
const formSelect = document.querySelector('.left__select')

const ticketDate = document.querySelector('.title__menu__text-date')
const ticketTime = document.querySelector('.title__menu__text-time')
const ticketTypeForm = document.querySelector('.title__menu__text-type')

let currentDate = new Date()
formDate.value = currentDate.toLocaleDateString().split('.').reverse().join('-')
formTime.value = getTrueTime(currentDate)
ticketDate.innerHTML = getTrueDate(currentDate)
ticketTime.innerHTML = formTime.value
let type = 20

function getTrueDate(x) {
    let Mounth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return `${Days[x.getDay()]}, ${Mounth[x.getMonth()]} ${x.getDate()}`
}

function getTrueTime(x) {
    if(x.getMinutes() < 10) {
        return (`${x.getHours()}:0${x.getMinutes()}`)
    }
    if(x.getHours() < 10) {
        return (`0${x.getHours()}:${x.getMinutes()}`)
    }
    else {
        return (`${x.getHours()}:${x.getMinutes()}`)
    }
}

console.log(getTrueTime(currentDate))

function typeOfTicket() {
    type = this.value
    formBasicTypeSum.forEach(el => el.innerHTML = `(${type}`)
    formSeniorTypeSum.forEach(el => el.innerHTML = `(${type/2}`)
    let types = {
        20 : 'Permanent exhibition',
        25 : 'Temporary exhibition',
        40 : 'Combined Admission'
    }
    formSelect.value = types[type]
    ticketTypeForm.innerHTML = formSelect.value
    return type
}

function ticketsSum() {
    let basicSum = ticketsBasic.value*type
    let seniorSum = ticketsSenior.value*(type/2)
    let result = basicSum + seniorSum
    total.innerHTML = result

    formBasicText.innerHTML = ticketsBasic.value
    formSeniorText.innerHTML = ticketsSenior.value
    basicResult.innerHTML = basicSum + ' €'
    seniorResult.innerHTML = seniorSum + ' €'

    formBasicAmount.value = ticketsBasic.value
    formSeniorAmount.value = ticketsSenior.value

    formTotal.innerHTML = result + ' €'
}

function dateValidate() {
    if(new Date(this.value) < currentDate) {
        this.style.border = '1px solid red'
        ticketDate.innerHTML = 'Сhoose another date'
        ticketDate.style.color = 'red'
    }
    else {
        ticketDate.innerHTML = getTrueDate(new Date(this.value))
        this.style.border = '1px solid black'
        ticketDate.style.color = 'black'
    }
}

function timeValidate() {
    if(this.value.split(':')[0] < 9 || this.value.split(':')[0] > 18) {
        this.style.border = '1px solid red'
        ticketTime.innerHTML = 'Сhoose another time'
        ticketTime.style.color = 'red'
    }
    else {
        ticketTime.innerHTML = this.value
        this.style.border = '1px solid black'
        ticketTime.style.color = 'black'
    }
}

function formTicketsType() {
    let formType = {
        'Permanent exhibition' : 20,
        'Temporary exhibition' : 25,
        'Combined Admission' : 40
    }
    formBasicTypeSum.forEach(el => el.innerHTML = `(${formType[this.value]}`)
    formSeniorTypeSum.forEach(el => el.innerHTML = `(${formType[this.value]/2}`)
    ticketTypeForm.innerHTML = this.value
}

function formTicketsSum() {
    let basicFormSum = formBasicTypeSum[0].innerHTML.slice(1) * formBasicAmount.value
    let seniorFormSum = formSeniorTypeSum[0].innerHTML.slice(1) * formSeniorAmount.value

    basicResult.innerHTML = basicFormSum + ' €'
    seniorResult.innerHTML = seniorFormSum + ' €'

    formBasicText.innerHTML = formBasicAmount.value
    formSeniorText.innerHTML = formSeniorAmount.value

    formTotal.innerHTML = (basicFormSum + seniorFormSum) + ' €'
}

function NameValidate() {
    if(this.value.length < 3 || this.value.length > 15) {
        this.style.border = '1px solid red'
    }
    else if(/\d/g.test(this.value)) {
        this.style.border = '1px solid red'
    }
    else if(/[a-z]/gi.test(this.value) && /[а-я]/gi.test(this.value)) {
        this.style.border = '1px solid red'
    }
    else if(/[a-z]/gi.test(this.value)) {
        this.style.border = '1px solid black'
    }
    else if(/[а-я]/gi.test(this.value)) {
        this.style.border = '1px solid black'
    }
    else if(/\S/.test(this.value)) {
        this.style.border = '1px solid black'
    }
    else {
        this.style.border = '1px solid red'
        this.style.color = 'red'
        this.value = 'Invalid format'
    }
}

function EmailValidate() {
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(!reg.test(this.value)) {
        this.style.border = '1px solid red'
        this.style.color = 'black'
        this.value = 'Invalid format'
        this.style.color = 'red'
    }
    else {
        this.style.border = '1px solid black'
        this.style.color = 'black'
    }
}

function TelValidate() {
    let reg = /^\d[\d\(\)\ -]{4,14}\d$/
    if(reg.test(this.value)) {
        this.style.border = '1px solid black'
        this.style.color = 'black'
    }
    else {
        this.style.border = '1px solid red'
        this.style.color = 'red'
        this.value = 'Invalid format'
    }
}

ticketsChoiceBasic.forEach(el => el.addEventListener('click', ticketsSum))
ticketsChoiceSenior.forEach(el => el.addEventListener('click', ticketsSum))
ticketType.forEach(el => el.addEventListener('click', typeOfTicket))
ticketType.forEach(el => el.addEventListener('click', ticketsSum))

formDate.addEventListener('change', dateValidate)
formTime.addEventListener('change', timeValidate)
formSelect.addEventListener('change', formTicketsType)
formSelect.addEventListener('change', formTicketsSum)
formBasicBtn.forEach(el => el.addEventListener('click', formTicketsSum))
formSeniorBtn.forEach(el => el.addEventListener('click', formTicketsSum))

formName.addEventListener('change', NameValidate)
formEmail.addEventListener('change', EmailValidate)
formTel.addEventListener('change', TelValidate)


