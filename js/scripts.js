$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var item1input = $("input#item1").val();
    var item2input = $("input#item2").val();
    var item3input = $("input#item3").val();
    var item4input = $("input#item4").val();
    var item5input = $("input#item5").val();
    var item6input = $("input#item6").val();
      
    var inputs = [item1input, item2input, item3input, item4input, item5input, item6input,];

    var capitalInputs = inputs.map(function(input){
      return input.toUpperCase();
    });

    var sortedCapitalInputs = capitalInputs.sort();

    
    sortedCapitalInputs.forEach(function(sortedCapitalInput){
      $('ul').append("<li>" + sortedCapitalInput + "</li>");
    });
    if ($("input#item1") === "") {
      $("#form1").show();
      $("#results").hide();
    } else {
      $("#results").show();
      $("#form1").hide();
    };

      });


  });