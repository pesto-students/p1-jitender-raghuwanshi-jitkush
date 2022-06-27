const findSum = (arr, key) => {
    len = arr.length;
    prevTempDiff = Infinity ; 
    currentTempDiff = 0 ;

    for ( i = 0 ; i < len - 3 ; i++) {
        for( j = 1 ; j < len - 2 ; j ++) {
            if(i === j){
                continue;
            }
            for( k = 2 ; k < len  ; k++){
                if(j === k) {
                    continue;
                }
                        sumOfSubArray = arr[i] + arr[j] + arr[k];
                        if ( sumOfSubArray === key ) {
                            subArray = [arr[i],arr[j],arr[k]];
                            return [subArray ,  0]
                        }
                        else if( sumOfSubArray < key) {
                            currentTempDiff = key - sumOfSubArray;
                        }
                        else {
                            currentTempDiff = sumOfSubArray - key;
                        }
                    if (prevTempDiff > currentTempDiff) {
                        prevTempDiff = currentTempDiff;
                        subArray = [arr[i],arr[j],arr[k]]
                    }
                    else if (prevTempDiff < currentTempDiff){
                        continue;
                    }
                }

            
        }
    
    }
    return [subArray , prevTempDiff]
}




//arr = [-1,2,-4,1,3]
arr= [-1,2,-3,4,5,-6]
console.log(findSum(arr,11))
