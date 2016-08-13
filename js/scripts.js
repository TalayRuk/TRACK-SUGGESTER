var add = function (question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
};

$(document).ready(function(){
  $("#start").click(function(){
    $(".jumbotron").hide();
    $(".alert-success").show();
    $(".questions").fadeIn();
    $(".answer").hide();


  });


  $(".questions form").submit(function(){

    var name = $("input#name").val().toUpperCase();
    $(".name").text(name);
    alert('HELLO');


      var question1 = parseInt($("input:radio[name=question1]:checked").val());
      alert(question1);
      var question2 = parseInt($("#question2").val());
      alert(question2);
      var question3 = parseInt($("#question3").val());
      alert(question3);
      var question4 = parseInt($("#question4").val());
      alert(question4);
      var question5 = parseInt($("#questions").val());
      alert(question5);

      var result = add(question1, question2, question3, question4, question5)
      alert(result);
      if (result <= 7) {
        $("#8-12").hide();
        $("#5-7").show();
      }else if (result > 7 || result <= 12) {
        $("#5-7").hide();
        $("#8-12").show();
      }




    });




    $(".answer").show();
    $(".alert-success").hide();
    $(".questions").fadeOut();


  });
