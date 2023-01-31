let fahr = 0;
let cels = 0;

const convertToCelsius = function(fahr) {

return parseFloat((((fahr-32)*.5556*10)/10).toFixed(1));

};

const convertToFahrenheit = function(cels) {

  return parseFloat(((((cels*1.8)+32)*10)/10).toFixed(1));

};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
