var arrayNum: number[] = [30, 44, 55, 22, 44, 11, 60];
var firstFound = arrayNum.find((element) => element > 44);
console.log(firstFound); //55

var arrayNom: number[] = [55, 44, 55, 33, 33];
//var result = arrayNom.find((element) => element == 43);
// var result = arrayNom.find(function (element) {
//   element == 43;
// });
var result = arrayNom.find(isExist);

function isExist(element: number) {
  return element == 43;
}
console.log(result);
