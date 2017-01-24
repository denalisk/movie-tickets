var movieArray = [];

var Movie = function(movieName, newReleaseStatus, id) {
  this.movieName = movieName;
  this.newReleaseStatus = newReleaseStatus;
  this.movieTimes = [];
  this.nickname = id;
};

var Ticket = function(time, quantity, movie) {
  this.time = time;
  this.quantity = quantity;
  this.movie = movie;
};

var adventures = new Movie("The Adventures of Epiherodus", true, "adventures");
movieArray.push(adventures);
var brightLights = new Movie("Bright Lights, Tech City", false,"brightLights");
movieArray.push(brightLights);
var starWars = new Movie("Star Wars: The Prequel Prequel (The Lost Lucas)", true,"starWars");
movieArray.push(starWars);
var stooges = new Movie("The Fourth Stooge: This Time with Pink Panther", false,"stooges");
movieArray.push(stooges);


Ticket.prototype.pricemodifier = function(time, quantity) {
  var price = 7;

  if (time > 1600) {
    price += price * 1.2;
  } else if (time < 1600) {
    price -= price * 0.2;
  };
  if (this.movie.newReleaseStatus === true) {
    price += 3;
  };
  var total = price * quantity;
  return total.toFixed(2);
};

Ticket.prototype.timeConverter = function(time) {
  var ampm = "am";
  var convertedTime = time;
  if (time > 1159) {
    ampm = "pm";
  }
  if (time > 1259) {
    convertedTime -= 1200;
  }
  var splitTime = (convertedTime + ampm).split('');
  splitTime.splice(splitTime.length-4, 0, ":");
  return splitTime.join('');
}



$(function(){
  $("#movies").submit(function(event){
    event.preventDefault();

    })
  $("button").click(function(){
    var selectedMovie = $(this).val();
    var newReleaseStatus = true;
    var movieTime = parseFloat($(this).parent().parent().find("#movietime").val());
    var movieQuantity = parseFloat($(this).parent().parent().find("#moviesum").val());
    var newMovie = new Ticket(movieTime, movieQuantity, movieArray[selectedMovie]);

    $(".output").append("<strong>" + newMovie.movie.movieName + "</strong> " + " at "+ newMovie.timeConverter(newMovie.time) + " for $" + newMovie.pricemodifier(newMovie.time, newMovie.quantity) +"<br>");

    $(this).parent().parent().find("#movietime").val(0);
    $(this).parent().parent().find("#moviesum").val(0);
  })

});
