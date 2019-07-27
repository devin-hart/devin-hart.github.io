// Countdown timer

var countDownDate = new Date("Aug 2, 2019 14:00:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".vacation__timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".vacation__timer").innerHTML = "VACATION TIME";
  }
}, 1000);

// Collapsible content

$('.vacation__title').click(function() {
  let sectionName = $(this).attr('data-name');

  if ($(this).hasClass('active')) {
    $( `#${sectionName}` ).slideUp( "slow");
    $('.vacation__title').removeClass('active');
    $('.vacation__section').removeClass('active');
  } else {
    $( `#${sectionName}` ).slideDown( "slow");
    $(this).addClass('active');
    $(`.vacation__section#${sectionName}`).addClass('active');
  }
});

let today = new Date();
let backgroundTime = today.getHours();
let backgroundDay = today.getDay();
console.log(backgroundDay);

// Update background depending on time of day
if (backgroundTime >= 21 || backgroundTime <= 5) {
  $('body').css('background', 'url("img/rehoboth-night.jpg") no-repeat center center fixed')
} else if (backgroundTime >= 17) {
  $('body').css('background', 'url("img/rehoboth-sunset.jpg") no-repeat center center fixed')
  
} else if (backgroundTime >= 9) {
  $('body').css('background', 'url("img/rehoboth-day.jpg") no-repeat center center fixed')
  
} else if (backgroundTime >= 6) { 
  $('body').css('background', 'url("img/rehoboth-sunrise.jpg") no-repeat center center fixed')
}

// Update Grotto northstatus
if (backgroundTime >= 10 || backgroundTime <= 1) {
  $('.grotto-north-status').text('OPEN');
  $('.grotto-north-status').css('color', 'green');
} else {
  $('.grotto-north-status').text('CLOSED');
  $('.grotto-north-status').css('color', 'red');
}

// Update Grotto main status
if (backgroundDay <= 4 && backgroundTime >= 11 || backgroundTime <= 1) {
  $('.grotto-main-status').text('OPEN');
  $('.grotto-main-status').css('color', 'green');
} else if (backgroundDay >= 5 && backgroundTime >= 11 || backgroundTime <= 2) {
  $('.grotto-main-status').text('OPEN');
  $('.grotto-main-status').css('color', 'green');
} else {
  $('.grotto-main-status').text('CLOSED');
  $('.grotto-main-status').css('color', 'red');
}

// Update Thrashers status
if (backgroundDay === 1 && backgroundTime >= 11 && backgroundTime <= 20) {
  $('.thrashers-status').text('OPEN');
  $('.thrashers-status').css('color', 'green');
} else if (backgroundDay !== 1 && backgroundTime >= 11 && backgroundTime <= 22) {
  $('.thrashers-status').text('OPEN');
  $('.thrashers-status').css('color', 'green');
} else {
  $('.thrashers-status').text('CLOSED');
  $('.thrashers-status').css('color', 'red');
}