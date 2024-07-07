const fibonacci = function(numRaw) {
    const num = parseInt(numRaw)
    if (num == 0){
        return 0;
    } else if(num<0){
        return "OOPS";
    } 
    
    else {
        let fibo = [1,1];
        for(i=1; i<num; i++){
            fibo.push(fibo[i-1]+fibo[i])
        }
        return fibo[num-1]
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
