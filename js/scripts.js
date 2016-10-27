function convert(number) {
  var numerals = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         //  9 ones
                  ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   //  90 tens
                  ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],// 900 hundreds
                  ["","M","MM", "MMM",]];// 3 thousand
  var numeral = "";
  var romanNumber = number.toString().split('').reverse();
  for (var i=0; i < romanNumber.length; i++){
    var codes = numerals[i];
    numeral = codes[parseInt(romanNumber[i])] + numeral;
  }
};


$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#number-input").val());
  convert(userInput);
  })
  $("#result").text(numeral);
})
