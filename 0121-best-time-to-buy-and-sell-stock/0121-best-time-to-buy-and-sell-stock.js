/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0;
    for(let i=0;i<prices.length;i++){
        let min=prices[i];
        for(let j=0;j<i;j++){
            min=Math.min(min,prices[j]);
        }
        profit=prices[i]-min;
        max=Math.max(profit,max);
    }
    return max;
};