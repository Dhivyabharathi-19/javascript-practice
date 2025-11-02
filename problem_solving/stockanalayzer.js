// Task: Stock Price Analyzer

// Scenario:
// You have daily stock prices. You need to find:

// The maximum profit you can make by buying and selling once.

// The day to buy and the day to sell.

// Data:

// const prices = [100, 180, 260, 310, 40, 535, 695];

const prices = [100, 180, 260, 310, 40, 535, 695];

let minPrice = prices[0];
let maxProfit = 0;
let buyDay = 0;
let sellDay = 0;

for (let i = 1; i < prices.length; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
    buyDay = i;
  }

  const profit = prices[i] - minPrice;
  if (profit > maxProfit) {
    maxProfit = profit;
    sellDay = i;
  }
}

console.log("Maximum Profit:", maxProfit);
console.log("Buy on Day:", buyDay + 1, " (Price:", prices[buyDay], ")");
console.log("Sell on Day:", sellDay + 1, " (Price:", prices[sellDay], ")");

// Output:
// Maximum Profit: 655
// Buy on Day: 5  (Price: 40 )
// Sell on Day: 7  (Price: 695 )
