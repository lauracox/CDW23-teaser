function scrollDown(element) {
  element.scrollBy(0, 300);
}

function checkScroll(element) {
  return element.scrollHeight - element.scrollTop - element.clientHeight < 1;
}

function checkOverflow(element) {
  return element.scrollHeight > element.clientHeight;
}

function showScroll() {
  setTimeout(function() {
    var btn = currentTab.querySelector('.arrow');
    btn.style.display = checkOverflow(currentTab) ? 'block' : 'none';
  }, 100);
}

function collapseTabs() {
  var form = document.querySelector('input.email');
  var sections = document.querySelectorAll('section');
  if (document.activeElement === form) {
    sections.forEach(
      function(section) {
        section.style.height = '25%';
      });
  }
}

function toggleScroll() {
  var btn = currentTab.querySelector('.arrow');
  var arrow = currentTab.querySelector('.arrow svg');
  var scrollTop = 'this.closest(".ta' + 'b").scrollTo(0, 0)';
  if (checkScroll(currentTab) == true) {
    arrow.style.transform = 'rotateX(0deg)';
    btn.setAttribute('onClick', scrollTop);
  } else {
    arrow.style.transform = 'rotateX(180deg)';
    btn.setAttribute('onClick', 'scrollDown(this.closest(".ta' + 'b"))');
  }
};

var currentTab = document.querySelector('input[type="radio"]:checked + section .tab');
function activeTab() {
  currentTab = document.querySelector('input[type="radio"]:checked + section .tab');
  showScroll();
  currentTab.addEventListener('scroll', toggleScroll);
}


document.addEventListener('DOMContentLoaded', function() {

  activeTab();

  // doesn't work yet, need to get if condition for focused form
  const mediaQuery = window.matchMedia('(max-width: 720px)');
  function mobileSize(e) {
    if (e.matches) {
      collapseTabs();
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