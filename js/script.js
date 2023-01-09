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
  }, 200);
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

function footerColor() {
  var tabColor;
  var cTab = document.querySelector('#cville .tab');
  var dTab = document.querySelector('#design .tab');
  var wTab = document.querySelector('#week .tab');
  var yTab = document.querySelector('#year .tab');
  if (currentTab === cTab) {
    tabColor = '#9390ff';
  } else if (currentTab === dTab) {
    tabColor = '#ff8552';
  } else if (currentTab === wTab) {
    tabColor = '#dbff45';
  } else if (currentTab === yTab) {
    tabColor = '#f4eed4';
  } 
  var text = document.querySelector('footer #signup');
  var btn = document.querySelector('footer form input[type="submit"]');
  text.style.color = tabColor;
  btn.style.background = tabColor;
  btn.onmouseover = function() {btn.style.color = tabColor;}
  btn.onmouseout = function() {btn.style.color = 'var(--text-dark)';}
}

var currentTab = document.querySelector('input[type="radio"]:checked + section .tab');
function activeTab() {
  setTimeout(function() {
    currentTab = document.querySelector('input[type="radio"]:checked + section .tab');
    showScroll();
    footerColor();
    currentTab.addEventListener('scroll', toggleScroll);
  }, 100);
}


document.addEventListener('DOMContentLoaded', function() {

  activeTab();

  const mediaQuery = window.matchMedia('(max-width: 720px)');
  function mobileSize(e) {
    if (e.matches) {
      var footer = document.querySelector('footer');
      footer.addEventListener('click', function() {
        var currentRadio = document.querySelector('input[type="radio"]:checked');
        if (document.activeElement === document.querySelector('input.email')) {
          currentRadio.checked = false;
        } else {
          document.querySelector('input#tab4').checked = true;
        }
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
    swipeAngle: 30,
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