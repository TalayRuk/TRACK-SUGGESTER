$(document).ready(function(){
  $(".btn-danger").click(function(){
    $(".jumbotron").hide();
    $(".alert-success").show();
    $(".container").fadeIn();

  });

  $(".questions form").submit(function(event){
    var name = $("input#name").val();
    $(".name").text(name);


    $(".answer").show();

    event.preventDefault();
  });




});
