// Smooth Scroll Jump Marker
document.querySelectorAll('a').forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault();

        const hash = event.target.hash;
        
        document.querySelector(hash).scrollIntoView({
            behavior: 'smooth'
        })
    })
})



