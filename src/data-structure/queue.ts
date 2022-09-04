class Queue {
  #count = 0;
  #lowestCount = 0;
  #items: number[] = [];
  enqueue(element: number) {
    this.#items[this.#count] = element;
    this.#count++;
  }
  isEmpty() {
    return this.#count - this.#lowestCount === 0;
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("No Element!");
    }
    const result = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return "No Element!";
    }
    return this.#items[this.#lowestCount];
  }
  size() {
    return this.#count - this.#lowestCount;
  }
  clear() {
    this.#items = [];
    this.#count = 0;
    this.#lowestCount = 0;
  }
}

const oque = new Queue();
oque.enqueue(10);
oque.enqueue(20);
oque.enqueue(30);
oque.enqueue(40);
oque.enqueue(50);
console.log(oque.dequeue());
console.log(oque.dequeue());
console.log(oque.size());

// try {
//   oque.dequeue();
// } catch (error) {
//   console.log(error.message);
// }
