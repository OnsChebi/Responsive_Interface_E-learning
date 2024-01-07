document.addEventListener('DOMContentLoaded', (event) => {
  
    // Example: initializing the carousel with custom options
    var myCarousel = document.querySelector('#carouselExampleControls');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000, // Changes the speed of the automatic slide
      wrap: true // Specifies whether the carousel should cycle continuously or have hard stops
    });
  });
  