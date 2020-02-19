/**
 * @function scrollbar
 * @returns interval progress bar
 */

const scrollbar = () => {
  let step = 1;
  let lines = document.querySelectorAll('.skills__line');
  let skillsNumber = document.querySelectorAll('.skills__num');

  let interval = setInterval(progressBar, 30);

  function progressBar() {
    if (step >= 100) {
      clearInterval(interval);
    } else {
      step++;

      lines.forEach(elem => {
        elem.style.width = step + '%';
      });

      skillsNumber.forEach(num => {
        num.innerHTML = step + '%';
      });
    }
  }
};

export default scrollbar;
