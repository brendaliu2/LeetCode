var maxProfit = function (prices) {
  let currMin = prices[0];
  let currProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let currPrice = prices[i];

    if (currPrice < currMin) {
      currMin = currPrice;
    } else if (currPrice - currMin > currProfit) {
      currProfit = currPrice - currMin;
    }
  }
  return currProfit;
};