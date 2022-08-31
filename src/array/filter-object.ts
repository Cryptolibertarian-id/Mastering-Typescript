const all = arrCrypto.filter((obj) => {
  return obj.blockchain === "Polygon";
});

console.table(all);
