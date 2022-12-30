// Set the date we're counting down to
var today = new Date();
var countDownDate = new Date(today.getTime() + (1 * 60 * 1 * 1000));
const update = function() {


  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, remove photo
  if (distance < 0) {
    document.getElementById("timer").innerHTML = "0d 0h 0m 0s"; 
  }
}
// Update the count down every 1 second
var x = setInterval(update, 1000);

