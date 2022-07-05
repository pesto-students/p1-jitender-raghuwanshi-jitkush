const nextGreatestElement = (arr) => {
    nextGreatestElementArr = [];
    i = 0;
    while( i < arr.length) {
            if(i == arr.length - 1){
                nextGreatestElementArr.push(-1);
            }
            else {
                if(arr[i] < arr[i+1]){
                    nextGreatestElementArr.push(arr[i+1]); 
                }
                else {
                    nextGreatestElementArr.push(arr[i] = -1);
                }
            }
            i++;
        }
        console.log(nextGreatestElementArr);
    }


arr = [1,8,10,11,5,3,7,1]

nextGreatestElement(arr)