const bestBuyDay = (price) => {
    tempDifference = 0;
    tempMaxProfit = 0;
    currBuyDay = 0;
    currSellDay = 0;
    for ( i = 0 ; i < price.length - 1 ; i++) {
        for(j = price.length ; j > 0 ; j--) {
            if( j > i && i != j && price[i] > price[j]){
                tempDifference = price[i] - price[j];
                if(tempDifference > tempMaxProfit) {
                    tempMaxProfit = tempDifference;
                    currBuyDay = i + 1;
                    currSellDay = j + 1; 
                 }
                else if (j < i && i === j && price[i] < price[j]) {
                    break;
                }
            }
            else {
                continue;
            }
        }
    }

    console.log(currBuyDay , currSellDay+ `     ` + tempMaxProfit + `   currentprofit  `+ tempDifference)
    console.log(   `****buy date****   ` +    currBuyDay + `  ****price****    `+price[(currBuyDay - 1 )]+ `
****sell day****   ` + currSellDay +`  ****price****    `+price[(currSellDay - 1)
    ] +`
    $$totalProfitEarned$$        ` + tempMaxProfit)


}
price = [8,6,5,4,9,7,3,2,1,10,1,25,9]
bestBuyDay(price);
