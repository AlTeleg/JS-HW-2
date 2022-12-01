function getPrimeNumbers(q) {

    const p = [];
    for (let i = 2; p.length < q; i++) {
        let isPrime = true;
        for (let j = 0; j < i**(1/2); j++) {
            if (i % p[j] === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            p.push(i);
        }
    }
    return p;
}		

console.time();
console.log(getPrimeNumbers(process.argv[2]));
console.timeEnd();