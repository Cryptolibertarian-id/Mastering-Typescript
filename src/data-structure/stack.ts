class Stack {
  #items: string[];
  constructor() {
    this.#items = [];
  }
  push(element: string) {
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

const ostack = new Stack();
console.log(ostack.isEmpty());
ostack.push("Hello World!");
console.log(ostack);
