var Movie = function(movieName, newReleaseStatus, price, time) {
  this.movieName = movieName;
  this.newReleaseStatus = newReleaseStatus;
  this.movieTimes = [];
  this.price = price;
  this.selectTime = time;
};

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
    var movie1Time = parseFloat($("#movie1").val());
    var movie1Quantity = parseFloat($("#movie1sum").val());
    var movie1 = new Movie("The Adventures of Epiherodus", true, 7, movie1Time);



    $(".output").text(movie1.movieName + " " + " at "+ movie1.selectTime + " for $" + movie1.pricemodifier(movie1Time, movie1Quantity));

  });
});
