(function () {
  var me = {};


me.toggleToActiveLink = function(target) {
  var links = document.querySelectorAll('.nav__link');
  var showedSection = target.dataset.link;

  for (var i = 0; i < links.length; i++){
    if (links[i].classList.contains('nav__link--active')){
      links[i].classList.remove('nav__link--active');
    }
  };

  target.classList.add('nav__link--active');

  scrollToActiveSection(showedSection);

};

function scrollToActiveSection(showedSection) {
  var section = document.querySelector('.' + showedSection);
  var coords = section.getBoundingClientRect();

  // while (window.pageYOffset < coords.top) {
  //   window.scrollBy(0, 10);
  // }

  var timerID = setInterval(function() {
    if (window.pageYOffset < coords.top){
      window.scrollBy(0, 7);
    } else {
      clearInterval(timerID);
    }
  }, 1);
}

  main.navigation = me;
})();
