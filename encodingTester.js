  var userAnswer = document.getElementById("user_input");
  $(document).ready(function(){

    var count = 0;
    var correct = 0;
    var encodeType1 = 1;
    var encodeType2 = 1;
    var randomDecimal = 255;

    var answer = parseInt(randomDecimal);

    function questionGen(){
      encodeType1 = option();
      encodeType2 = option();
      randomDecimal = Math.floor((Math.random()*254)+1);
      answer = parseInt(randomDecimal);

    if(encodeType1 == 1){
      if(encodeType2 == 1){
        answer = answer.toString(16);
        $("#type1").html("Decimal "+randomDecimal+"");
        $("#type2").html("Hexadecimal");
      }else if (encodeType2 == 2) {
        answer = answer.toString(2);
        $("#type1").html("Decimal "+randomDecimal+"");
        $("#type2").html("Binary");
      } else if (encodeType2 == 3) {
        var asciiSet = [ascii() , ascii() , ascii() , ascii() , ascii() , ascii() , ascii(), ascii()];
        answer = "";
        for(i = 0; i < asciiSet.length; i++){
          answer += String.fromCharCode(asciiSet[i])
        }
        asciiSet = asciiSet.join('-')
        $("#type1").html("Decimal Set "+asciiSet+"");
        $("#type2").html("ASCII");
      };
    } else if (encodeType1 == 2) {
      var randomHex = answer.toString(16);
      answer = answer.toString(2);
      $("#type1").html("Hexidecimal "+randomHex);
      $("#type2").html("Binary");
    } else if (encodeType1 == 3) {
      var randomBin = answer.toString(2);
      answer = answer.toString(16);
      $("#type1").html("Binary "+randomBin);
      $("#type2").html("Hexadecimal");
    };
  };

    $("#submit").click(function(){
      count++;
      if(encodeType2 != 3){
      var userAnswer= $("#users_answer").val().toLowerCase();
    } else if (encodeType2 = 3) {
      var userAnswer= $('#users_answer').val();
    };
      if(userAnswer == answer){
        correct++;
        $("#result").removeClass();
        $("#result").html("Correct!");
        $("#score").html(correct+" / "+count);
      } else if (userAnswer != answer) {
        $("#result").toggleClass("wrong");
        $("#result").html("Incorrect!");
        $("#rightAnswer").html("The correct answer was "+answer)
        $("#score").html(correct+" / "+count);
      };
      questionGen();
    });

  questionGen();

  function option(){
    var choice = Math.floor((Math.random()*3)+1);
    return choice;
  }

  function ascii(){
    var ascii = Math.floor((Math.random()*25)+65);
    return ascii;
  }
  });
