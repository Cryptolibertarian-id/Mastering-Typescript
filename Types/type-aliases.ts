type Balance = number;
type Type = string;

type Wallet = {
  name: string;
  amount: Balance;
  symbol: Type;
};

let bitcoinWallet: Wallet = {
  name: "Bitcoin",
  amount: 5.88800007,
  symbol: "BTC",
};

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function drawCoordinate(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

drawCoordinate({ x: 10, y: 20 });

type humanoid = {
  name: string;
  sayHello(): string;
};

let Gun: humanoid = {
  name: "GGF",
  sayHello: function () {
    return "Hello World!!";
  },
};
console.log(Gun.sayHello()); // Hello World!
