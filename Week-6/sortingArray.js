const sortArray = (arr) => {
    len = arr.length;
    countOf0 = 0;
    countOf1 = 0;
    countOf2 = 0;
    for( i = 0 ; i < len ; i++) {
        if(arr[i] === 0) {
            countOf0++;
        }
        else if(arr[i] === 1) {
            countOf1++;
        }
        else if(arr[i] === 2) {
            countOf2++;
        }
    }
    arr = [];
    console.log(countOf0+`  `+countOf1+`    `+countOf2 )

    for ( i = 0 ; i < countOf0 ; i++) {
        arr.push(0);
    }
    for ( i = 0 ; i < countOf1 ; i++){
        arr.push(1);
    }
    for ( i = 0 ; i < countOf2 ; i++){
        arr.push(2);
    }
}


arr = [2,0,1,0,2,0,1,1,0,2,1,2,0,1,2,01,02]

sortArray(arr)