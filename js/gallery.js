const innerContainer = document.querySelector('.gallery__inner__content')

let arr=[]

function arrPic() {
    for(let i=1; i<16; i++) {
        arr.push(`<img class="gallery__img" data-aos="fade-up"
        data-aos-duration="1800" alt="img" src="./assets/img/galery/galery${i}.jpg">`)
    }
    return arr
}

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5)
    return arr
}

function add(arr) {
    arr.map(el => innerContainer.innerHTML = innerContainer.innerHTML + el)
}
arrPic()
shuffle(arr)
add(arr)










