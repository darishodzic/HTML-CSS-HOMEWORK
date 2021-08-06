while(true){
    var unos=parseInt(prompt("Unesite 1.Sabiranje,2.Oduzimanje,3.Mnozenje,4.Deljenje,5.Stop"))
    if(unos===1){
        a=parseInt(prompt("Unesite a: "))
        b=parseInt(prompt("Unesite b: "))
        console.log("Zbir je: ",a+b);
    }
    if(unos===2){
        a=parseInt(prompt("Unesite a: "))
        b=parseInt(prompt("Unesite b: "))
        console.log("Razlika je: ",a-b);
    }
    if(unos===3){
        a=parseInt(prompt("Unesite a: "))
        b=parseInt(prompt("Unesite b: "))
        console.log("Mnozna je: ",a*b);
    }
    if(unos===4){
        a=parseInt(prompt("Unesite a: "))
        b=parseInt(prompt("Unesite b: "))
        console.log("Deljenik je: ",a/b);
    }
    if(unos===5){
        console.log("stop");
        break
    }
}