$(document).ready(function(event){
  $("#start").click(function(){
    $(".jumbotron").hide();
    $(".alert-success").show();
    $(".container").fadeIn();

    event.preventDefault();
  });
});

  $("#ready").submit(function(event){
      event.preventDefault();
    var name = $("input#name").val();
    $(".name").text(name);


    $(".answer").show();


  });
