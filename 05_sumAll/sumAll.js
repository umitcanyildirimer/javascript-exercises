let total = 0;

const sumAll = function(num1, num2) {
  if (Number.isInteger(num1)==true & Number.isInteger(num2)==true & num1>=0 & num2 >=0 & num1 > num2) {

    for (;num2 <= num1; num2++) {
      
        total += num2;
    }
  }

  else if (Number.isInteger(num1)==true & Number.isInteger(num2)==true & num1>=0 & num2 >=0 & num2 > num1) {

    for (;num1 <= num2; num1++) {
      
        total += num1;
      
    }
}
  else  {

    
      
        total = 'ERROR';
    
    
  }



  return total;
  
    };


// Do not edit below this line
module.exports = sumAll;
