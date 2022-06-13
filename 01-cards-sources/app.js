function slidesPlugin(activeSlide = 2) {
    const slides = document.querySelectorAll('.slide')

    for (const slide of slides) {
        slides[activeSlide].classList.add('active')

        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach(slide => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin()
