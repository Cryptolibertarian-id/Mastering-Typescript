var arrayNum: number[] = [30, 44, 55, 22, 44, 11];
arrayNum.forEach((element, index, arr) => console.log(element, index, arr));
let res: number[] = [];
const mulTwoTimes = (element: number) => {
  res.push(element * 2);
  console.log(res);
};

arrayNum.forEach(mulTwoTimes);
