const checkDuplicate = (arr) => {
    let flag;
    let sortedArr=arr.sort(function(a,b) {return a-b;});
    console.log(sortedArr);
    for(let i=0; i<=sortedArr.length; i++) {
        if(sortedArr[i] === sortedArr[++i]) {
            flag=true;
        }
        else{
            flag=false;
        }
    }
    return flag;
}

const checking=checkDuplicate([4,5,1,2,3,5,4]);
console.log(checking);