const getMaxSum = (arr) => {
    sumPos = 0; 
    sumNeg = 0;
    length = arr.length
    arrMaxSumPositiveNum = [];
    arrMaxSumNegativeNum = [];
    for ( let i = 0 ; i < length-1; i++) {
        if(arr[i] > 0) {
            sumPos += arr[i];
            arrMaxSumPositiveNum.push(arr[i]);       

        }
        else if(0 > arr[i]) {
            sumNeg += arr[i];
            arrMaxSumNegativeNum.push(arr[i]);
            
        }
    }
    if(sumPos > sumNeg && sumPos != 0) {
        return [sumPos , arrMaxSumPositiveNum]
    }
    else if(sumNeg > sumPos || sumPos == 0) {
        return [sumNeg , arrMaxSumNegativeNum];   
    }
}

let arr2 = [-1,-2,-4,-5,-6,-8,-10];
const [g,h] = getMaxSum(arr2);
console.log(`max sum = ${g} and sub-array of matrix = ${h}`);


let arr = [1,2,4,-5,6,-8,-10];
const [a,b] = getMaxSum(arr);
console.log(`max sum = ${a} and sub-array of matrix = ${b}`);