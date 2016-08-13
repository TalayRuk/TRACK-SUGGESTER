var add = function (question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
};

$(document).ready(function(event){
  $("#start").click(function(){
    $(".jumbotron").hide();
    $(".alert-success").show();
    $(".questions").fadeIn();


  });


  $(".questions form").submit(function(event){
    var name = $("input#name").val().toUpperCase();
    $(".name").text(name);
    alert('HELLO');

    $("#ready").click(function(event){
      event.preventDefault();
      var question1 = parseIn($("input:radio[name=question1]:checked").val());
      var question2 = parseIn($("#question2").val());
      var question3 = parseIn($("#question3").val());
      var question4 = parseIn($("#question4").val());
      var question5 = parseIn($("#questions").val());

      var score = add(question1, question2, question3, question4, question5)

      if (5<score<7) {
        $("#5-7").show();

      }




    });




    $(".answer").show();
    $(".alert-success").hide();
    $(".questions").fadeOut();

    event.preventDefault();
  });
});
