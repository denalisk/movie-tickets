$(function(){
  $("#movies").submit(function(event){
    event.preventDefault();
    var movie1Time = $("#movie1").val();

    $(".output").text(movie1Time);

  })
});
