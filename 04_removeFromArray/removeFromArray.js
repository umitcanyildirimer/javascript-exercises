
const removeFromArray = function(arr,value,value1,value2,value3) {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index,1);
    }

    console.log(arr);

    const index1 = arr.indexOf(value1);
    if (index1 > -1) {
      arr.splice(index1,1);
    }

    console.log(arr);


    const index2 = arr.indexOf(value2);
    if (index2 > -1) {
      arr.splice(index2,1);
    }

    console.log(arr);

    const index3 = arr.indexOf(value3);
    if (index3 > -1) {
      arr.splice(index3,1);
    }
    console.log(arr);
    return arr;
};

removeFromArray([1,2,3,4], 1,2,3,4);

// Do not edit below this line
module.exports = removeFromArray;
