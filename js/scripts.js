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

    var name = $("input#name").val().toUpperCase();
    $(".name").text(name);
    alert('HELLO, '+ name);
  });

  $("#ready").click(function() {
      var question1 = parseInt($("input:radio[name=question1]:checked").val());

      var question2 = parseInt($("#question2").val());

      var question3 = parseInt($("#question3").val());

      var question4 = parseInt($("#question4").val());

      var question5 = parseInt($("#question5").val());

      var result = add(question1, question2, question3, question4, question5);


      if (result <= 7) {
        $("#8-12, #13-15, #16-19").hide();
        $("#5-7").show();
      }else if (result > 7 || result <= 12) {
        $("#5-7, #13-15, #16-19").hide();
        $("#8-12").show();
      }else if (result > 12 || result <= 15) {
        $("#5-7, #8-12, #16-19").hide();
        $("#13-15").show();
      }else if (result > 15 || result <= 19) {
        $("#5-7, #8-12, #13-15").hide();
        $("#16-19").show();
      }

    $(".final").show();
    $(".alert-success").hide();
    $(".questions").fadeOut();

    event.preventDefault();
  });
});
