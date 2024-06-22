const removeFromArray = function(array, ...args) {
    for(let arg of args){
        if(array.includes(arg)){
          while(array.includes(arg)){
            array.splice(array.indexOf(arg),1);
        } 
      }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
