const repeatString = function(string, num) {

return string.repeat(num);

};

let num = parseInt(prompt('Enter number of times the string will be repeated: '));
let string = 'hey';

repeatString(string, num);



// Do not edit below this line
module.exports = repeatString;
