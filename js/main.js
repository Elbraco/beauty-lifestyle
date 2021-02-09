/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 300) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '100px',
    reset: false,
});

sr.reveal(`.logo, .story, .bg-header, .message__bubble-one, .about, .beauty, .keeping`, {
    duration: 1800,
    origin: 'top',
    interval: 10,
})
sr.reveal(`.message__bubble-two,.online`, {
    duration: 2500,
    origin: 'top',
    interval: 20,
})

sr.reveal(`.message__bubble-three,.message__bubble-four`, {
    duration: 4000,
    origin: 'top',
    interval: 20,
})


