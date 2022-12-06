document.addEventListener('DOMContentLoaded', function() {


  // CAROUSEL IMAGE SLIDER
  // https://ganlanyuan.github.io/tiny-slider/

  let slider = tns({
    container: '.carousel',
    items: 1,
    slideBy: 1,
    gutter: '20',
    autoplay: false,
    mouseDrag: true,
    nav: false,
    controlsContainer: '#controls',
    prevButton: '.previous',
    nextButton: '.next',
    responsive: {
      1000: {
        items: 2
      },
      1600: {
        items: 3
      }
    }
  });

});