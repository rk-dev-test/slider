const carouselSlide = document.querySelector('.carousel-slide')
const carouselSlideImg = document.querySelectorAll('.carousel-slide img')
const preBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')


let counter = 0;
let size = carouselSlideImg[0].clientWidth;

window.addEventListener('load', () => {
    nextBtn.addEventListener('click', () => {
        counter >= carouselSlideImg.length - 1 ? counter = -1 : counter
        console.log(counter)
        counter++
        carouselSlide.style.transition = `transform 0.4s ease-in-out`
        carouselSlide.style.transform = `translateX(-${size * counter}px)`
    })
    preBtn.addEventListener('click', () => {
        console.log(counter)
        counter <= 0 ? counter = carouselSlideImg.length - 1 : counter--
        carouselSlide.style.transition = `transform 0.4s ease-in-out`
        carouselSlide.style.transform = `translateX(-${size * counter}px)`
    })
})


//Slider functioning with bullets
const bullets = document.querySelector('.bullets')
let i = 0;
carouselSlideImg.forEach(slide => {
    let wrap = document.createElement('li')
    i++
    wrap.classList.add('list' + [i])
    wrap.setAttribute('data-index', [i])
    bullets.appendChild(wrap);
})

let bulletsLi = document.querySelectorAll('.bullets li')
let bulletArr = Array.from(bulletsLi)

for (let j = 0; j < bulletArr.length; j++) {
    bulletArr[j].onclick = function () {
        counter = parseInt(this.getAttribute('data-index') - 1)
        carouselSlide.style.transition = `transform 0.4s ease-in-out`
        carouselSlide.style.transform = `translateX(-${size * counter}px)`
    }
}
// Auto slide
setInterval(() => {
    counter++
    if (counter >= carouselSlideImg.length) {
        counter = 0
    }
    carouselSlide.style.transition = `transform 0.4s ease-in-out`;
    carouselSlide.style.transform = `translateX(-${size * counter}px)`
}, 5000);




