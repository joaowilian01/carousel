const prevButton = document.querySelector('[data-js="carousel-button-prev"]')
const nextButton = document.querySelector('[data-js="carousel-button-next"]')
const images = document.querySelectorAll('[data-js="carousel-image"]')

let actualIndex = 0
const lastIndex = images.length - 1

const incrementIndex = () =>
  actualIndex = actualIndex < lastIndex ? ++actualIndex : 0

const decrementIndex = () =>
  actualIndex = actualIndex > 0 ? --actualIndex : lastIndex

nextButton.addEventListener('click', () => {
  incrementIndex()

  images.forEach(image => image.classList.remove('carousel-image-visible'))
  images[actualIndex].classList.add('carousel-image-visible')
})

prevButton.addEventListener('click', () => {
  decrementIndex()

  images.forEach(image => image.classList.remove('carousel-image-visible'))
  images[actualIndex].classList.add('carousel-image-visible')
})