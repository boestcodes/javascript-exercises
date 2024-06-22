const repeatString = function(string, num) {
    let target = "";
    if (num<0){
        return "ERROR"
    }
    else{
        for(i=0; i<num; i++){
            target += string;
        }
        return target
    }
};

// Do not edit below this line
module.exports = repeatString;
