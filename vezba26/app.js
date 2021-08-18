function squareDigits(num) {
    num=num.toString()
    res=""
    for (let i = 0; i < num.length; i++) {
        res+=parseInt(num[i])**2
        
    }
    res=parseInt(res)
    console.log(res);
}

squareDigits(9119)