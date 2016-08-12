$(document).ready(function(){
  $(".btn-danger").click(function(){
    $(".jumbotron").hide();
    $(".alert-success").slidein();
    $(".questions").fadein();

  });

});
