import '../styles/index.scss';
import scrollbar from './scrollbar';
import scrollbarAnimation from './scrollbarAnimation';

window.onload = () => {
  window.onscroll = function() {
    if (window.scrollY > 300) {
      scrollbar();
      scrollbarAnimation();
      window.scrollY = null;
    }
  };
};

console.log('webpack starterkit');
