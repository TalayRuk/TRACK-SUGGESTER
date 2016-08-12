$(document).ready(function(event){
  $("#start").click(function(){
    $(".jumbotron").hide();
    $(".alert-success").show();
    $(".questions").fadeIn();


  });


  $(".questions form").submit(function(event){

    var name = $("input#name").val().toUpperCase();
    $(".name").text(name);
    alert('hello');

    $(".answer").show();
    $(".alert-success").hide();
    $(".questions").fadeOut();

    event.preventDefault();
  });
});
