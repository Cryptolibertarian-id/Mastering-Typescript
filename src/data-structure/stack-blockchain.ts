interface crypto {
  id: number;
  blockchain: string;
  price: number;
}

class StackBlockchain {
  #items: crypto[];
  constructor() {
    this.#items = [];
  }
  push(element: crypto) {
    this.#items.push(element);
  }
  pop() {
    this.#items.pop();
  }
  peek() {
    return this.#items[this.#items.length - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.#items.length;
  }
  clear() {
    this.#items = [];
  }
}

const oStack = new StackBlockchain();
console.log(oStack.isEmpty());
oStack.push({
  id: 1,
  blockchain: "Polygon",
  price: 550,
});
console.log(oStack.peek());
