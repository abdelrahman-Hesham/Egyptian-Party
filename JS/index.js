/// <reference types="../@types/jquery"/>


$('#singerOne').on( 'click',function(){
    $('#singerOneDesc').slideToggle(500)
})
$('#singerTwo').on( 'click',function(){
    $('#singerTwoDesc').slideToggle(500)
})
$('#singerThree').on( 'click',function(){
    $('#singerThreeDesc').slideToggle(500)
})
$('#singerFour').on( 'click',function(){
    $('#singerFourDesc').slideToggle(500)
})


// <!-- Display the countdown timer in an element -->
// <p id="demo"></p>


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $(".day").html(days+'d') 
  document.querySelector('.hours').innerHTML=  hours + "h ";
  document.querySelector('.minutes').innerHTML=  minutes + "m " 
  document.querySelector('.seconds').innerHTML= seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);




$('.bar').on('click',function(){
  $('.side').animate({'left': '0'},1000)
})
$('.fa-x').on('click',function(){
  $('.side').animate({'left': '-250px'},1000)
})