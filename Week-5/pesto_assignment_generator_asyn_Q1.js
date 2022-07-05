function* checkDivisibilityByThreeAndFive(num) {
    if(num % 5==0 && num % 3 ==0) {
        yield `${num} is dividible by 3 and 5`;
    }   
    else if(num % 3 == 0){
        console.log(`the ${num} is not divisible by 3 and 5, checking divisibility by either 3 and 5`)
        yield `${num} is divisible only by 3`;
    }
    else if(num % 5 == 0) {
        console.log(`the ${num} is not divisible by 3 and 5, checking divisibility by either 3 and 5`)
        yield `${num} is divisible only by 5`;
    }
    else {
        yield `${num} is not divisible by 3 and 5`;
    }
}



const checking = checkDivisibilityByThreeAndFive(10045);
console.log(checking.next().value);



const isDivisibleBy3And5 = (num) => {
    const passed = num;
    return new Promise((resolve,reject) => {
            if(passed % 5 == 0 && passed % 3 == 0){
                resolve(num);
            }
            else {
                reject(num);
            }
    } 
    )
}
const isDivisibleBy3 = (num) => {
    const passed = num;
    return new Promise((resolve,reject) => {
            if(passed % 3 == 0){
                resolve(num);
            }
            else {
                reject(num);
            }
    } 
    )
}

const isDivisibleBy5 = (num) => {
    const passed = num;
    return new Promise((resolve,reject) => {
            if(passed % 5 == 0){
                resolve(num);
            }
            else {
                reject(num);
            }
    } 
    )
}


const checkDiviibility = async (num) => {
    isDivisibleBy3And5(num)
    .then((result) => {
        console.log(`the ${result} is divisible by 5 and 3`);
        return isDivisibleBy3(num);
    }).catch((result) => {
            console.log(`the ${result} is not divisible by 5 and 3`);
            return isDivisibleBy3(num);
        }).then( (result) => {
            console.log(`the ${result} is divisible 3`);
            return isDivisibleBy5(num);
        })
        .catch((result) => {
            console.log(`the ${result} is not divisible 3`);
            return isDivisibleBy5(num);
        }).then((result) => {
            console.log(`the ${result} is divisible by 5`);
        }).catch((result) => {
            console.log(`the ${result} is not divisible by 5`);
        })
}


checkDiviibility(18);