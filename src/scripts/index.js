import '../styles/index.scss';

import progressBar from './progressBar';
import scrollbarAnimation from './scrollbarAnimation';
import './magnific-popup/index';
import './lib/slick';

window.onload = () => {
  window.onscroll = function(e) {
    let winY = window.scrollY;
    if (winY > 300) {
      // progress bar
      progressBar();

      scrollbarAnimation();

      winY = null;
    }
  };

  const scrollBtn = document.querySelector('.isShowBtn');

  window.onscroll = () => {
    if (window.scrollY > 700) {
      scrollBtn.classList.remove('isShowBtn_hide');
    } else if (window.scrollY < 700) {
      scrollBtn.classList.add('isShowBtn_hide');
    }
  };

  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };

  // $('.isShowBtn').click(function() {
  //   $(window).scrollTop(0);
  // });
};

console.log('webpack starterkit');
