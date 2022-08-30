console.log(Date.now());
function getUnixTimestamp() {
  return Math.floor(Date.now() / 1000);
}

console.log(getUnixTimestamp());
