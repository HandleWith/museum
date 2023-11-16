const sliderBox = document.querySelector('.welcome__slider__inner'),
    arrowLeft = document.querySelector('.slider__arrow__left'),
    arrowRight = document.querySelector('.slider__arrow__right'),
    currentSlide = document.querySelector('.amount__item__span'),
    sliderMenu = document.querySelectorAll('.slider__item'),
    carouselItem = document.querySelector('.carousel__item'),
    arrowsblock = document.querySelectorAll('.slider__arrows'),
    width = carouselItem.clientWidth,
    slides = sliderBox.querySelectorAll('div'),
    slideLength = sliderMenu.length,
    slidesFirstClone = slides[slideLength - 1].cloneNode(true),
    slidesLastClone = slides[0].cloneNode(true)
    let slidecount = 0,
        isEnabled = true

    sliderBox.prepend(slidesFirstClone)
    sliderBox.append(slidesLastClone)

    sliderBox.style.left = `-${100}%`

function slideChange(direction) {
    sliderBox.classList.add('welcome__slider__active')
    if(isEnabled) {
        if(direction === 'left') {
            slidecount --
            if(slidecount < 0) {
                sliderBox.style.transform = `translateX(${-slidecount*width/1.4}px)`
            }
        }
        else if(direction === 'right') {
            slidecount ++
        }
        sliderBox.style.transform = `translateX(-${slidecount*(width/1.4)}px)`
    }
    isEnabled = false
}

function checkIndex() {
    sliderBox.classList.remove('welcome__slider__active')
    if(slidecount === -1) {
        sliderBox.style.transform = `translateX(-${(slideLength - 1)*width/1.4}px)`
        slidecount = slideLength - 1
    }
    if(slidecount === slideLength) {
        sliderBox.style.transform = `translateX(${width/(width*2)}px)`
        slidecount = 0
    }
    isEnabled = true
}

function itemColorChange() {
    for(let i = 0; i<sliderMenu.length; i++) {
        sliderMenu[i].classList.remove('slider__active')
    }
    if(slidecount === slideLength) {
        sliderMenu[0].classList.add('slider__active')
        currentSlide.innerHTML = `0${1}`
    }
    else if(slidecount === -1) {
        sliderMenu[slideLength-1].classList.add('slider__active')
        currentSlide.innerHTML = `0${5}`
    }
    else {
        sliderMenu[slidecount].classList.add('slider__active')
        currentSlide.innerHTML = `0${slidecount + 1}`
    }
}

function slidemove() {
    sliderBox.classList.add('welcome__slider__active')
    slidecount = this.className.match(/[1-5]/) - 1
    sliderBox.style.transform = `translateX(-${slidecount*(width/1.4)}px)`
    currentSlide.innerHTML = `0${slidecount}`
}

arrowLeft.addEventListener('click', () => slideChange('left'))
arrowRight.addEventListener('click', () => slideChange('right'))
sliderMenu.forEach(el => el.addEventListener('click', slidemove))
sliderMenu.forEach(el => el.addEventListener('click', itemColorChange))
arrowsblock.forEach(el => el.addEventListener('click', itemColorChange))
sliderBox.addEventListener('transitionend', () => checkIndex())

let posInit = 0,
    posFinal = 0,
    posX1 = 0,
    posX2 = 0,
    posThreshold = width * .1

function swipeStart(e) {
    posInit = posX1 = e.clientX
    sliderBox.classList.remove('welcome__slider__active')
    document.addEventListener('mousemove', swipeAction)
    document.addEventListener('mouseup', swipeEnd)
    document.addEventListener('touchmove', swipeAction)
    document.addEventListener('touchend', swipeEnd)
}

function swipeAction(e) {
    posX2 = posX1 - e.clientX
    posX1 = e.clientX
    if(!sliderBox.style.transform) {
        style = 0
    }
    else {
        style = sliderBox.style.transform.match(/[-0-9.]+(?=px)/)[0]
    }
    sliderBox.style.transform = `translateX(${style - posX2}px)`
}

function swipeEnd() {
    posFinal = posInit - posX1

    document.removeEventListener('touchmove', swipeAction)
    document.removeEventListener('touchend', swipeEnd)
    document.removeEventListener('mousemove', swipeAction)
    document.removeEventListener('mouseup', swipeEnd)
  
    if (Math.abs(posFinal) > posThreshold) {
      if (posInit < posX1) {
        slidecount--

      } else if (posInit > posX1) {
        slidecount++
      }

    }
    if (posInit !== posX1) {
        sliderBox.classList.add('welcome__slider__active')
        sliderBox.style.transform = `translateX(-${slidecount*(width/1.4)}px)`
        if(slidecount < 0) {
            sliderBox.style.transform = `translateX(${-slidecount*width/1.4}px)`
            currentSlide.innerHTML = `0${5}`
            itemColorChange()
        }
        else if(slidecount > 4) {
            currentSlide.innerHTML = `0${1}`
            itemColorChange()
        }
        else {
            currentSlide.innerHTML = `0${slidecount+1}`
            itemColorChange()
        }  
    }
  }
  

sliderBox.addEventListener('mousedown', swipeStart)
sliderBox.addEventListener('touchstart', swipeStart)

