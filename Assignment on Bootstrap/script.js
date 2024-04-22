document.addEventListener('DOMContentLoaded', function() {
    // Initialize the carousel
    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls'), {
        interval: 5000 // Adjust the interval as needed (in milliseconds)
    });

    // Pause the carousel on mouse hover
    var carouselElement = document.getElementById('carouselExampleControls');
    carouselElement.addEventListener('mouseenter', function() {
        carousel.pause();
    });

    // Resume the carousel when mouse leaves
    carouselElement.addEventListener('mouseleave', function() {
        carousel.cycle();
    });
});
