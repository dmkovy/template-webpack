/**
 * @function scrollbar
 * @returns interval progress bar
 */

const progressBar = () => {
  let lines = document.querySelectorAll('.skills__line');
  let skillsNumber = document.querySelectorAll('.skills__num');

  for (let i = 0; i < skillsNumber.length; i++) {
    // console.log(skillsNumber[i].dataset.num);

    for (let y = 0; y < lines.length; y++) {
      lines[i].style.width = skillsNumber[i].dataset.num + '%';
    }
  }

  // counter Up
  $('.skills__num').counterUp({
    delay: 10,
    time: 1000
  });
};

export default progressBar;
