let s2 = [];
const twoStack = (arr) => {
    let i = 0;
    while( i < arr.length ){
        if(arr[i] == 1){
            s2.push(arr[i+1]);
            i += 2;
        }
        else if (arr[i] == 2){
            s2.shift();
            i += 1;
        }

    }
    console.log(s2);
    
}



s1= [1,2 , 1,4 , 1,6 , 2 , 2 , 1,9, 2]
twoStack(s1);