/** caroselloORcards-script **/
document.addEventListener("DOMContentLoaded", caroselloType);
window.addEventListener('resize', caroselloType);

function caroselloType() {
  let windowWidth = window.innerWidth;

  let carosello = document.getElementById("carouselExampleIndicators");
  let carosello_small = document.getElementById("cardSmallScreen");

  if (windowWidth <= 767) {
    carosello.setAttribute("hidden","");
    carosello_small.removeAttribute("hidden");
  } else {
    carosello.removeAttribute("hidden");
    carosello_small.setAttribute("hidden","");
  }
}


/** carouselwords-script **/
document.addEventListener("DOMContentLoaded", function() {
  let words = ["HTML", "CSS", "JavaScript", "Bootstrap", "Sass", "webpack", "Axios", "Vue.js", "PHP", "SQL", "Proattività", "People Oriented", "Precisione", "Creatività", "Italiano", "Inglese"];
  let counter = 1;
  setInterval(update_carousel_words, 1500);
  function update_carousel_words(){
    document.getElementById("carousel").innerHTML = words[counter];
    counter++;
    if (counter >= 16) {
      counter = 0;
    }
  }
});
