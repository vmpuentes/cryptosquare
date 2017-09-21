//business logic


//user logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var string = $("#sentenceInput").val().split(" ").join("").toLowerCase();
    var newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_'"`~()]/g,"");
    var columnNumber = Math.floor(Math.sqrt(newString.length));
    var newStringArray = newString.split("");
    var finalStringArray = [];


    for (i=0; i<columnNumber; i++) {
      for (x=i; x< newStringArray.length; x+=columnNumber) {
        finalStringArray.push(newStringArray[x]);
        // alert(finalStringArray);
      }
      console.log(finalStringArray);
      columnNumber
    }

    event.preventDefault();
  });
});
