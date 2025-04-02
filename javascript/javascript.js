const linksInternos = document.querySelectorAll('.header-menu a[href^="#"]')

function scrollSuave(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
    })
}

linksInternos.forEach((item) => {
    item.addEventListener('click' , scrollSuave)
})