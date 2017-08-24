function cakeThief(cakes, capacity) {
  let totalWeight = 0;
  let totalValue = 0;
  let sortedCakes = [];

  sortedCakes = cakes.sort((a, b) => {
    (b['value']/b['weight']) - (a['value']/a['weight'])
  });
  for (let i = 0; i < sortedCakes.length; i++) {
    while ((sortedCakes[i]['weight'] + totalWeight) <= capacity) {
      totalValue += sortedCakes[i]['value'];
      totalWeight += sortedCakes[i]['weight'];
    }
  }
  console.log(totalValue);
}

let cakes = [
  {weight: 7, value: 1},
  {weight: 2, value: 2}
];

let cakes2 = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15}
];

cakeThief(cakes, 10); // should return 3
cakeThief(cakes2, 20); // should return 555
