var1= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita itaque soluta numquam fugiat aspernatur. Repellat laudantium perferendis porro voluptatem debitis dolore nam! Quisquam perspiciatis excepturi est ipsum laudantium minima quia."
k="aeiou"
for (let a = 0; a < k.length; a++) {
    slovo=k[a]
    brojac=0
    for (let index = 0; index < var1.length; index++) {
        if (var1[index]===slovo) {
            brojac++
        }
    }   
    console.log("Slovo",slovo,"se nalazi u stringu: ",brojac,"puta");
}