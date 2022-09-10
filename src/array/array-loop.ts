var bitcoinFigures: string[] = ["Satoshi", "Adam Back", "Andreas Antonopoulos"];

for (let i: number = 0; i < bitcoinFigures.length; i++) {
  console.log(i + " " + bitcoinFigures[i]);
}

var i: number = 0;
for (let arrayVal of bitcoinFigures) {
  console.log(i + " " + arrayVal);
  i++;
}

for (let index in bitcoinFigures) {
  console.log(index + " " + bitcoinFigures[index]);
}
