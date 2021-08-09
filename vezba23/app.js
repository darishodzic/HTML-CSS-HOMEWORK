a=["abraxxxas","xoxotrololollololoxxx","softX kitty, warm kitty, xxxxx"]
var tacnost
for (let i = 0; i < a.length; i++) {
    b=a[i].indexOf("x")
    if (a[i][b+1]==="x"&&a[i][b+2]==="x") {
        tacnost=true

    }else{
        tacnost=false
    }
    console.log(a[i],"je",tacnost,"\n");
    
}
