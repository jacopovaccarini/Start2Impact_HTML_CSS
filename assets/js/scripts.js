/** carouselwords-script **/
document.addEventListener("DOMContentLoaded", function() {
  var words = ["HTML", "CSS", "Bootstrap", "Sass", "Proattività", "People Oriented", "Italiano", "Inglese"];
  var counter = 0;
  setInterval(update_carousel_words, 1500);
  function update_carousel_words(){
    document.getElementById("carousel").innerHTML = words[counter];
    counter++;
    if (counter >= 8) {
      counter = 0;
    }
  }
});
