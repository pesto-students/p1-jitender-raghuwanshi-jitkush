const checkPairDifference = (arr , key) => {
    flag = 0;
    tempDiff = 0;
    for ( i = 0 ; i < arr.length - 1 ; i++) {
        for( j = arr.length ; j > 1 ; j--) {
            if( i != j && i < j) {
                if( arr[i] > arr[j]) {
                    tempDiff = arr[i] - arr[j]
                    if (tempDiff === key){
                        flag = 1;
                        console.log(flag , arr[i] , arr[j]);
                        return;
                    }
                    else {
                        flag = 0;
                    }
                }
                else if(arr[j] > arr[i]) {
                    tempDiff = arr[j] - arr[i]
                    if (tempDiff === key){
                        flag = 1;
                        console.log(flag )
                        console.log( arr[j], arr[i] );
                        return;
                    }
                    else {
                        flag = 0;
                    }
                }
            }
            else {
                continue;
            }
        }
    }
    return flag;
}

arr = [55,84,12,93,70,21,49]
let x = checkPairDifference(arr , 35 );



