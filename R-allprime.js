

function prime(num) {
    let numArray = [];
    for (let i = 1; i <= num; i++){    
    numArray.push(i);
}

numArray.map((number) => {
    for(let i = 2; i <number; i++){
        if(number % i === 0){
            let index = numArray.indexOf(number);
            return numArray.splice(index,1);

        }

    }
});
return numArray;

}
prime(10);
console.log(num);