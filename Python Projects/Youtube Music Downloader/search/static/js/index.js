/*
var slideIndex = 1;
showSlidesdre(slideIndex);

function rightleftnextdre(m) {
  showSlidesdre(slideIndex += m);
}

function currentdre(m) {
  showSlidesdre(slideIndex = m);
}

function showSlidesdre(m){
  var k;
  var j=document.getElementsByClassName("fullpage");
  if(m > j.length) {slideIndex = 1}
  if(m < 1) {slideIndex = j.length};
  for (k = 0; k < j.length; k++) {
    j[k].style.display = "none";
  }
  j[slideIndex-1].style.display = "block";

}
var slideIndex=0;
showSlides();

function showSlides() {
  var k;
  var slides = document.getElementsByClassName("fullpage");
  for (k = 0; k < slides.length; k++) {
    slides[k].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 300000000); // Change image every 5 minutes = 300000ms
}
*/
