var movieArray = [];

var Movie = function(movieName, newReleaseStatus, time) {
  this.movieName = movieName;
  this.newReleaseStatus = newReleaseStatus;
  this.movieTimes = [];
  this.price = 7;
  this.selectTime = time;
};

var Ticket = function(quantity, time, movie) {

}

Movie.prototype.pricemodifier = function(time, quantity) {
  var price = 7;

  if (time > 1600) {
    price += price * 1.2;
  } else if (time < 1600) {
    price -= price * 0.2;
  };
  if (this.newReleaseStatus === true) {
    price += 3;
  };
  var total = price * quantity;
  return total.toFixed(2);
};




$(function(){
  $("#movies").submit(function(event){
    event.preventDefault();

      });
// Movie 1
  $("#movie1submit").click(function(event){
    var name = "The Adventures of Epiherodus";
    var newReleaseStatus = true;
    var movie1Time = parseFloat($("#movie1").val());
    var movie1Quantity = parseFloat($("#movie1sum").val());

    var ticket1 = new Ticket(movie1Time, movie1Quantity, name);
    var movie1 = new Movie(name, newReleaseStatus, movie1Time);

    $(".output").append(movie1.movieName + " " + " at "+ movie1.selectTime + " for $" + movie1.pricemodifier(movie1Time, movie1Quantity) +"<br>");

    $("#movie1").val(0)
    $("#movie1sum").val(0)
  })
// Movie 2
  $("#movie2submit").click(function(event){
    var name = "Bright Lights, Tech City";
    var newReleaseStatus = false;
    var movie2Time = parseFloat($("#movie2").val());
    var movie2Quantity = parseFloat($("#movie2sum").val());

    var ticket1 = new Ticket(movie2Time, movie2Quantity, name);
    var movie2 = new Movie(name, newReleaseStatus, movie2Time);

    $(".output").append(movie2.movieName + " " + " at "+ movie2.selectTime + " for $" + movie2.pricemodifier(movie2Time, movie2Quantity) +"<br>");

    $("#movie2").val(0)
    $("#movie2sum").val(0)
  })
});
