const spiralMat = (arr) => {
    rowLen = arr.length;          // 7 
    colLen = arr[0].length;       //7

    spiralMatrix = [];
        //printing the outermost elements
        for ( x = 0 ; x < colLen  ; x++ ) {
            spiralMatrix.push(arr[0][x]);  
            temp = x;  
        }   
        secondI = 1 ;                  
        secondJ = temp - 1;              
        //console.log(`second (i,j) = (${secondI},${secondJ})`)
        
        for ( x = secondI  ; x < rowLen ; x++){
            spiralMatrix.push(arr[x][secondJ + 1])          
            temp  = x;              
        }
        thirdI = temp - 1;
        thirdJ = secondJ;        //7
        //console.log(`third (i,j) = (${thirdI},${thirdJ})`)
        
         for( x = thirdJ ; x >= 0 ; x-- ){
           spiralMatrix.push(arr[thirdI + 1][x])
           temp = x;
         }
         fourthI = thirdI ; 
         fourthJ = temp + 1;
         //console.log(`fourth (i,j) = (${fourthI},${fourthJ})`)
         
         for( x = fourthI  ; x >= 1 ; x--) {
             spiralMatrix.push(arr[x][fourthJ - 1]);
             temp = x;
            }
            firstI = temp;
            firstJ = fourthJ;
       // console.log(`first (i,j) = (${firstI},${firstJ})`)
            rowLen--;
            colLen--;
            console.log(rowLen , colLen)
        //console.log(`############********************############`)
         a = 2;   

            while(firstI <= rowLen && firstJ <= colLen){
                
               //console.log(`${a} current in  use FIRST (i,j) = (${firstI},${firstJ})`)
                for( x = firstJ ; x <= secondJ ; x++){
                    spiralMatrix.push(arr[secondI][x])
                }

               // console.log(`${a} current in  use second (i,j) = (${secondI},${secondJ})`)
                 if(secondI === thirdI && secondJ === thirdJ) {
                     break;
                 }
                for( x = secondI + 1 ; x <= thirdI ; x++) {
                    spiralMatrix.push(arr[x][thirdJ])
                }
                
               // console.log(`${a} current in use third (i,j) = (${thirdI},${thirdJ})`)
                 if(thirdI === fourthI && thirdJ === fourthJ ){
                     break;
                 }
                for( x = thirdJ - 1 ; x >= fourthJ ; x--) {
                    spiralMatrix.push(arr[fourthI][x])
                }
                
                //console.log(`${a} current in use fourth (i,j) = (${fourthI},${fourthJ})`)
                

                for ( x = fourthI - 1; x >= firstI + 1  ; x-- ){
                    spiralMatrix.push(arr[x][firstI])
                }

                firstI += 1;
                firstJ += 1;
                secondI += 1;
                secondJ -=  1;
                thirdI -=  1;
                thirdJ -=  1;
                fourthI -=  1;
                fourthJ +=  1;
                

                // console.log(`${a} for next iteration first (i,j) = (${firstI},${firstJ})`)
                // console.log(`${a} for next iteration second (i,j) = (${secondI},${secondJ})`)
                // console.log(`${a} for next iteration third (i,j) = (${thirdI},${thirdJ})`)
                // console.log(`${a} for next iteration fourth (i,j) = (${fourthI},${fourthJ})`)
                rowLen--;
                colLen--;
                // console.log(`****************#####################*********`)
                a++;
            }
            console.log(spiralMatrix);      
}

arr = 
[[1,2,3,4],
 [5,6,7,8],
 [9,10,11,12],
 [13,14,15,16],
 [17,18,19,20]]

spiralMat(arr);