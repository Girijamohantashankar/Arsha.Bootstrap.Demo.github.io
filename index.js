let flag = 0;

function myFunction() {
  var element = document.getElementById("button");
  var hams = document.getElementById("hams");
  if (flag == 0) {
    hams.classList.remove("la-bars");
    hams.classList.add("la-times");
    element.classList.add("change");
    flag = 1;
  } else {
    element.classList.remove("change");
    hams.classList.remove("la-times");
    hams.classList.add("la-bars");
    flag = 0;
  }
}




let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }