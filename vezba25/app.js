function myFunc(var1) {
    array=var1.split(" ")
    najduza_rec = ""
    for (let index = 0; index < array.length; index++) {
        if (najduza_rec.length < array[index].length) {
            najduza_rec=array[index]
        }
    }
    console.log(najduza_rec);
}
myFunc("Neki random tekst i tako to ")