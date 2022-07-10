
const slider = document.querySelectorAll('.slider')
let index = 0

const anterior = document.querySelector("#before")
anterior.addEventListener('click', before)

const proximo = document.querySelector("#next")
proximo.addEventListener('click', next)

function before() {
    slider[index].classList.remove('active')
    index = (index + 1) % slider.length
    slider[index].classList.add('active')
}

function next() {
    slider[index].classList.remove('active')
    index = (index - 1 + slider.length) % slider.length
    slider[index].classList.add('active')
}

setInterval(next, 7000)