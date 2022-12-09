function scrollDown(element) {
  element.scrollBy({
    top: 300,
    left: 0,
    behavior: 'smooth'
  });
}

function scrollUp(element) {
  element.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function fullScroll(element) {
  return element.scrollHeight - element.scrollTop - element.clientHeight < 1;
}

function checkOverflow(element) {
  return element.scrollHeight > element.clientHeight;
}

function showScroll() {
  setTimeout(function(){
    var btn = currentTab.querySelector('.arrow');
    btn.style.display = checkOverflow(currentTab) ? 'block' : 'none';
  }, 100);
}

function toggleScroll() {
  var btn = currentTab.querySelector('.arrow');
  var arrow = btn.querySelector('svg');
  while (fullScroll(currentTab) == true) {
    arrow.style.transform = 'rotateX(0deg)';
    btn.setAttribute('onClick', scrollTop(this.closest('.tab')));
  }
};

var currentTab = document.querySelector('#year .tab');
function activeTab(input) {
  currentTab = input.nextElementSibling.querySelector('.tab');
  showScroll();
}


document.addEventListener('DOMContentLoaded', function() {

  showScroll();  
  currentTab.addEventListener('scroll', toggleScroll);

  const mediaQuery = window.matchMedia('(max-width: 720px)');
  function mobileSize(e) {
    var form = document.querySelector('form');
    var sections = document.querySelectorAll('section');
    if (e.matches && document.activeElement == form) {
      sections.forEach(
        function(section) {
          section.style.height = '25%';
      });
    }
  }
  mediaQuery.addListener(mobileSize);
  mobileSize(mediaQuery);


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