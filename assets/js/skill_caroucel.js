const track = document.getElementById('carouselTrack');
let currentX = 0;

function slideCarousel(amount) {
    const viewport = track.parentElement;
    const maxScroll = track.scrollWidth - viewport.clientWidth;

    currentX += amount;

    // Clamp between 0 and max scroll
    currentX = Math.max(0, Math.min(currentX, maxScroll));

    track.style.transform = `translateX(-${currentX}px)`;
}


window.addEventListener("resize", function() {
    currentX = 0
    slideCarousel(0)
})