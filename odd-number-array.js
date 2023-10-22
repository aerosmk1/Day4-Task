const numbers =[5,4,7,8,90,33,2,14,6];
const odds = [];
    for (const num of numbers ){
        if (num % 2 === 1){
            odds.push(num);
        }
    }
console.log(odds);    