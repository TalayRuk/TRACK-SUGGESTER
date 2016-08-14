var add = function (question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
};

$(document).ready(function(){
  $("#start").click(function(){
    $(".jumbotron").hide();
    $(".alert-success").show();
    $(".questions").fadeIn();
  });


  $(".questions form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val().toUpperCase();
    $("#name").text(name);
    alert("Hello, "+ name + " !");
  });

  $("#ready").click(function() {
      var question1 = parseInt($("input:radio[name=question1]:checked").val());

      var question2 = parseInt($("#question2").val());

      var question3 = parseInt($("#question3").val());

      var question4 = parseInt($("#question4").val());

      var question5 = parseInt($("#question5").val());

      var result = add(question1, question2, question3, question4, question5);


      if (result <= 8) {
        $("#9-12, #13-15, #16-19").hide();
        $("#8").show();
      } else if (8 < result <= 12) {
        $("#8, #13-15, #16-19").hide();
        $("#9-12").show();
      } else if (12 < result <= 15) {
        $("#8, #9-12, #16-19").hide();
        $("#13-15").show();
      } else {
        $("#8, #9-12, #13-15").hide();
        $("#16-19").show();
      }

    $(".final").show();
    $(".alert-success").hide();
    $(".questions").fadeOut();


  });
});
