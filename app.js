
const https = require('https')

//Specific Year
const year = '2020'

/*
for (var n = 0; n < 5 + 1; n++) {
}
*/

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (resp) => {
      let data = '';
      resp.on('data', (chunk) => data += chunk);
      resp.on('end', () => resolve(data));
    }).on('error', (error) => reject({ error: error }));
  })
  .catch( (error) => {
    reject(error)
  })
}

async function callAPI(year) {
  let endDate = (year == '2022') ? '2022-09-30' : year + '-12-31';
  const url = `https://api.nbp.pl/api/exchangerates/rates/c/usd/${year}-01-01/${endDate}?format=json`;
  const data = await fetch(url);
  return JSON.parse(data);
}

//Values compare and Check Best time to Buy, Sell
function bestDiff(data) {
  var maxDiff = 0;
  var whenToBuy = {};
  var whenToSell = {};
  
  for (var x = 0; x < data.length; x++) {
    const buy = data[x];
    for (var y = x; y < data.length; y++) {
      const sell = data[y];
      const gain = sell.ask - buy.bid;
      if (gain > maxDiff) {
        maxDiff = gain;
        whenToBuy = buy;
        whenToSell = sell;
      }
    }
  }

  return {
    maxDiff,
    whenToBuy,
    whenToSell,
  }
}

async function main() {
  console.log(`Analizing years ...`);
  const data22 = await callAPI('2022');
  const data21 = await callAPI('2021');
  const data20 = await callAPI('2020');
  const data19 = await callAPI('2019');
  const data18 = await callAPI('2018');

  const result22 = bestDiff(data22.rates);
  const result21 = bestDiff(data21.rates);
  const result20 = bestDiff(data20.rates);
  const result19 = bestDiff(data19.rates);
  const result18 = bestDiff(data18.rates);

  const finalresult = [result22, result21, result20, result19, result18]

/*
  console.log('---');
  console.log('When to buy:', whenToBuy.effectiveDate);
  console.log('bid price:', whenToBuy.bid);
  console.log('---');
  console.log('When to sell:', whenToSell.effectiveDate);
  console.log('sell price:', whenToSell.ask);
  console.log('---');
  console.log('Gain:', Math.floor(maxDiff * 100) + '%');
  */

 //console.log('finial result', finalresult);

 // get best moments
 const capital = 150000;
 let bestBuyMoment = '';
 let bestSellMoment = '';
 let buyAmount = 0;
 let sellAmount = 0;
 Object.entries(finalresult).forEach(([key, val]) => {
  console.log(`${key}: ${val.whenToBuy.bid}`);

  if ( key == 0 ) {
    sellAmount = val.whenToSell.bid;
    buyAmount = val.whenToSell.ask;
    bestSellMoment = val.whenToSell.effectiveDate;
    bestBuyMoment = val.whenToSell.effectiveDate;
  }
 
  if ( sellAmount < val.whenToSell.bid ) { // get higher value
      sellAmount = val.whenToSell.bid;
      bestSellMoment = val.whenToSell.effectiveDate;
  }
  if ( buyAmount > val.whenToSell.ask ) { // get lower value
    buyAmount = val.whenToSell.ask;
    bestBuyMoment = val.whenToSell.effectiveDate;
  }
 });

 console.log('Best moment to buy ' + bestBuyMoment + ' the amount of: ' + (capital/buyAmount));

 
 console.log('Best moment to sell ' + bestSellMoment + ' the amount of: ' + (capital/sellAmount));
}

main()
