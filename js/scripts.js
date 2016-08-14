var add = function (question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
};

$(document).ready(function(){
  $("#start").click(function(){
    $(".jumbotron").hide();
    $(".alert-success").show();
    $(".questions").fadeIn(1000);
  });

  $(".questions form").submit(function(event){
    event.preventDefault();
    // y preventDefault allow alert here but not if it's on 56??
    var nameInput = $("input#person").val().toUpperCase();
    $(".person").text(nameInput);
    alert("Hello, "+ nameInput + " !");
  });

  $("#ready").click(function() {
    var question1 = parseInt($("input:radio[name=question1]:checked").val());

    var question2 = parseInt($("#question2").val());

    var question3 = parseInt($("#question3").val());

    var question4 = parseInt($("#question4").val());

    var question5 = parseInt($("#question5").val());

    var result = add(question1, question2, question3, question4, question5);

    // when I have (13 <= result >= 15) didn't work :(
    // also using || instead of && also not working
    // only the the first 2 works!!!! Y?
    if (result <= 8) {
      $("#9-12, #13-15, #16-19").hide();
      $("#8").show();
    } else if (result >= 9 && result <= 12) {
      $("#8, #13-15, #16-19").hide();
      $("#9-12").show();
    } else if (result >= 13 && result <= 15) {
      $("#8, #9-12, #16-19").hide();
      $("#13-15").show();
    } else {
      $("#8, #9-12, #13-15").hide();
      $("#16-19").show();
    }

    $(".final").show();
    $("#p-l-comic").fadeIn(5000);
    $(".alert-success").hide();
    $(".questions").hide();
  });
});
