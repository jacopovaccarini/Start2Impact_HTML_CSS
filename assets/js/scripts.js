/** carouselwords-script **/
document.addEventListener("DOMContentLoaded", function() {
  let words = ["HTML", "CSS", "JavaScript", "Bootstrap", "Sass", "Proattività", "People Oriented", "Italiano", "Inglese"];
  let counter = 1;
  setInterval(update_carousel_words, 1500);
  function update_carousel_words(){
    document.getElementById("carousel").innerHTML = words[counter];
    counter++;
    if (counter >= 9) {
      counter = 0;
    }
  }
});
