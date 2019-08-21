$(document).ready(function(){
  $("form#sieve").submit(function(event){
    event.preventDefault();
    var sieveNumber= $("input#number").val();
    var primes = findPrime(sieveNumber);
    $("#output").text(primes);

  });

});

function findPrime(userInput){
  var userNum= parseInt(userInput);
  var userDigits = [];
  for (var i = userNum; i>=2; i=i-1){
    userDigits.push(i);
  }

for (var prime =2; prime <=userDigits.length; prime= userDigits[userDigits.indexOf(prime)-1]){
  userDigits.forEach(function(number, index){
    if (number % prime === 0 && number !== prime){
      userDigits.splice(index, 1);
    }

  });


}
  return userDigits;
}
