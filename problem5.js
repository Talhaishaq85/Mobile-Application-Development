var str="Talhaishaq";
var num=2156;

function getVowel(str) {
  for (var i = 0; i <= str.length - 1; i++) {
    if (str.charAt(i) == "a" | str.charAt(i) == "e" | str.charAt(i) == "i" | str.charAt(i) == "o" | str.charAt(i) == "u") {
      return i;
    }
    }
  }

function reversedNum(num) {
    return (
      parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
    )                 
  }
var num1=reversedNum(num); 
  console.log(num1);
  console.log(getVowel(str));