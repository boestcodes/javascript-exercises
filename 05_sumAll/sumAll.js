const sumAll = function(start, stop) {
    sum = 0
    temp = 0
    if(start>stop){
        temp = start;
        start = stop;
        stop = temp;
    }

    if(start<0 || stop<0 || typeof(start)!=="number" || typeof(stop)!=="number"){
        return "ERROR"
    }
    
    else{
        for(i=start; i<=stop; i++){
            sum += i;
        }
    }
    

    return sum

};

// Do not edit below this line
module.exports = sumAll;
