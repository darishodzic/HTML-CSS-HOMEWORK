function profit() {
    b=15
    p=2
    f=3
    h=5
    c=10
    sum=0
    b=Math.floor(b/2)
    while (b>0 && (p>0 || f>0)) {
        if (h>c) {
            if (p>0) {
                b-=1
                sum+=h
                p-=1
            }else if (f>0) {
                b-=1
                sum+=c
                f-=1
            }
            
        } 
        if (c>h) {
            if (f>0) {
                b-=1
                sum+=c
                f-=1
            }else if (p>0) {
                b-=1
                sum+=h
                p-=1
            }
            
        }
        
        
    }
    console.log(sum);
}
profit()