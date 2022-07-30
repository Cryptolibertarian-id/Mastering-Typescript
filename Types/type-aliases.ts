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
