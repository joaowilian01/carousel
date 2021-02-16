const prevButton = document.querySelector('[data-js="carousel-button-prev"]')
const nextButton = document.querySelector('[data-js="carousel-button-next"]')
const images = document.querySelectorAll('[data-js="carousel-image"]')

let actualIndex = 0
const lastIndex = images.length - 1

nextButton.addEventListener('click', () => {
  if (actualIndex < lastIndex) {
    actualIndex++
  } else {
    actualIndex = 0
  }

  images.forEach(image => image.classList.remove('carousel-image-visible'))
  images[actualIndex].classList.add('carousel-image-visible')
})