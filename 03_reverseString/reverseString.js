const reverseString = function(string) {
    let splitString = string.split("")
    let newString = []
    for(i=0; i<splitString.length; i++){
        newString[i]=splitString[splitString.length-1-i]
    }
    return newString.join("")

};

// Do not edit below this line
module.exports = reverseString;
