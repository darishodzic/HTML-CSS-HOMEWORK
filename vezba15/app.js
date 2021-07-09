function myFunction(){
    namee = document.getElementById("name").value;
    emaill = document.getElementById("email").value;
    messagee = document.getElementById("message").value;
    if(namee&&emaill){
        console.log("Vase ime je: "+namee);
        console.log("Vas mail je: "+emaill);
    }
    else{
        alert("Unesite podatke");
    }
    console.log("Vasa poruka je: "+messagee);



}