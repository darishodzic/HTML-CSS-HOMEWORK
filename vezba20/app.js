
broj=parseInt(prompt("Unesite broj!"))
while(true){
    if(10<=broj&&broj<=20){
        document.body.style.backgroundColor = "green";
        break
    }else{
        document.body.style.backgroundColor = "red";
        document.getElementsByTagName("h1").backgroundColor="red"
        broj=parseInt(prompt("Pogresan broj unesite opet"))
    }

}