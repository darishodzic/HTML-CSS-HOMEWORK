function bus(niz) {
    zbir = 0
    for (let i = 0; i < niz.length; i++) {
        zbir+=niz[i][0]
        zbir-=niz[i][1]

    }
    return zbir
}
console.log(bus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))