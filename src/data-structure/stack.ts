class Stack {
  items: string[];
  constructor() {
    this.items = [];
  }
}

const ostack = new Stack();
ostack.items.push("Hello World!");
console.log(ostack);
