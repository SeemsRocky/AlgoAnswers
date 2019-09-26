/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
 * design an algorithm to find the maximum profit.
 * Note that you cannot sell a stock before you buy one.
 * 
 * @param {number[]} prices
 * @return {number}
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. 
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 */
var bruteMaxProfit = function(prices) {
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i += 1){
      for(let j = i; j < prices.length; j += 1){
        maxProfit =  prices[j]-prices[i] > maxProfit ? prices[j]-prices[i] : maxProfit;
      }
    }
    return maxProfit;
};
console.log(bruteMaxProfit([7,1,5,3,6,4]))
console.log(bruteMaxProfit([7,5,3,2,1]))

var linearMaxProfit = function(prices){
  let maxProfit = 0;
}