$(document).ready(function() {

    $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number-input").val());
    convert(userInput);
    })
///////////////////////////////////////////////////////////////////////////////////////////
var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         //  9 ones
                    ["","X","XX","X", "XL", "L", "LX", "LXX", "LXXX", "XC"],   //  90 tens
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],// 900 hundreds
                    ["","M","MM", "MMM",]];// 3 thousand
////////////////////////////////////////////////////////////////////////////////////////////
  function convert(num) {
    var numeral = "";
    var digits = num.toString().split('').reverse();
    for (var i=0; i < digits.length; i++){
      numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
    }
    $("#result").text(numeral);
  }
})
