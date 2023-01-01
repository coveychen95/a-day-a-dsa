function maxProfit(prices: number[]): number {
  let min = prices[0]
  let profit = 0
  let len = prices.length
  for (let i = 0; i <len;i++ ) {
    min = Math.min(min, prices[i])
    profit = Math.max(profit, prices[i] - min)
  }
  return profit
};
