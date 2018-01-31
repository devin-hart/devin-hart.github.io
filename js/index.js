var sscToggle = document.querySelector('.ssc-toggle');
var sscDesc = document.querySelector('.ssc-desc');

var trippinToggle = document.querySelector('.trippin-toggle');
var trippinDesc = document.querySelector('.trippin-desc');

var bloggotronToggle = document.querySelector('.bloggotron-toggle');
var bloggotronDesc = document.querySelector('.bloggotron-desc');

sscToggle.addEventListener("click", function(){
  if (sscDesc.style.display === "block") {
    sscDesc.style.display = "none";
  } else {
    sscDesc.style.display = "block";
  }
});

trippinToggle.addEventListener("click", function(){
  if (trippinDesc.style.display === "block") {
    trippinDesc.style.display = "none";
  } else {
    trippinDesc.style.display = "block";
  }
});

bloggotronToggle.addEventListener("click", function(){
  if (bloggotronDesc.style.display === "block") {
    bloggotronDesc.style.display = "none";
  } else {
    bloggotronDesc.style.display = "block";
  }
});
