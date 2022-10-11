
const https = require('https')

//Specific Year
const year = '2021'

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (resp) => {
      let data = '';
      resp.on('data', (chunk) => data += chunk);
      resp.on('end', () => resolve(data));
    }).on('error', (error) => reject({ error: error }));
  })
}

async function callAPI(year) {
  const url = `https://api.nbp.pl/api/exchangerates/rates/c/usd/${year}-01-01/${year}-12-31?format=json`;
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
  console.log(`Analizing year ${year}...`);
  const data = await callAPI(year);

  const { maxDiff, whenToBuy, whenToSell } = bestDiff(data.rates);
  const { maxDiff, whenToBuy, whenToSell } = bestDiff(data.rates);
  const { maxDiff, whenToBuy, whenToSell } = bestDiff(data.rates);
  const { maxDiff, whenToBuy, whenToSell } = bestDiff(data.rates);

  console.log('---');
  console.log('When to buy:', whenToBuy.effectiveDate);
  console.log('bid price:', whenToBuy.bid);
  console.log('---');
  console.log('When to sell:', whenToSell.effectiveDate);
  console.log('sell price:', whenToSell.ask);
  console.log('---');
  console.log('Gain:', Math.floor(maxDiff * 100) + '%');
}
git 
main()
