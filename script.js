const sliderContainer = document.querySelector ('.slider-container')
const slideRight = document.querySelector ('.right-slide')
const slideLeft = document.querySelector ('.left-slide')
const rightButton = document.querySelector ('.right-button')
const leftButton = document.querySelector ('.left-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

rightButton.addEventListener(`click`, () => changeSlide('up'))
leftButton.addEventListener(`click`, () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientWidth
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength -1
        }
    }

    slideRight.style.transform = `translateX(${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateX(-${activeSlideIndex * sliderHeight}px)`
}
