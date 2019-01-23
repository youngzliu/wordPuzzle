var checkVowel = function(str){
  if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u"){
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(function() {
  $("button#stop").click(function(event) {
      event.preventDefault();
      debugger;
      var sentence = $("#bob").val().split("");
      for(var i = 0; i < sentence.length; i++){
        if(checkVowel(sentence[i])){
          sentence[i] = "-";
        }
      }
      var result = sentence.join("");
      $("#coded").append(result);
  });
});
