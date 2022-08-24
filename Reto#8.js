/*TEST CASES*/
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
var a= maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)
a
const pricesEth = [10, 20, 30, 40, 50, 60, 70];
var a= maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)
a
const pricesDoge = [18, 15, 12, 11, 9, 7];
var a= maxProfit(pricesDoge); // -> -1 (no hay ganancia posible)
a
const pricesAda = [3, 3, 3, 3, 3];
var a= maxProfit(pricesAda); // -> -1 (no hay ganancia posible)
a

function maxProfit(prices) {
	let maxProfit = 0;
	prices.map((price, i)=>{
		prices.map((price2, j)=>{
			let currProfit = price2-price
			if(maxProfit < currProfit && i < j) {
				maxProfit = currProfit;
				}
		})
	})
	return (maxProfit == 0)?-1:maxProfit;
}
