var s = 1;
var n = 7777777;
var fCounter = 0;
var repeat = 1;
var i = 0
while (repeat === 1){
    while (fCounter != 2){
        if (n % 2 === 0){
            n = n / 2;
        } else {
            n = n * 3 + 1; 
        }
        if (n === 4){
            fCounter += 1;
        }
        i += 1;
        console.log(n);
    }
    console.log('It took', i, 'iterations to get stuck in the loop.')
    repeat = 2;
    s += 1;
    n = s;
}
