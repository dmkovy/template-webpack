import "../styles/index.scss";

import progressBar from "./progressBar";
import scrollbarAnimation from "./scrollbarAnimation";

window.onload = () => {
  window.onscroll = function() {
    if (window.scrollY > 300) {
      // progress bar
      progressBar();

      scrollbarAnimation();
      window.scrollY = null;
    }
  };
};

console.log("webpack starterkit");
