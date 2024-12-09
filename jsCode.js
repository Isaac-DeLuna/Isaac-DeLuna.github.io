
/*create and call a JavaScript function that keeps track of the current day and time*/
function displayDate() {

    var date = new Date();
    document.getElementById("date").innerHTML = date;
}
/*Delay one command or run a command at a specified interval*/
setInterval(displayDate, 1000);

/*Send an alert using JavaScript*/
window.alert('Welcome to Yami Sushi House.\nEnter a pickup time and click "check countdown" to generate a personalized countdown')

/*Include a countdown function*/
function countdown() {

var countDownDate = document.getElementById("pickupTime").value;
countDownDate = new Date(countDownDate);

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  /*Use a Math method*/
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  /*Convert between a number and a text*/
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Order is Ready!";
  }
}, 1000);
}

