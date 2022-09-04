interface crypto {
  id: number;
  blockchain: string;
  price: number;
}

class QueueBlockchain {
  #count = 0;
  #lowestCount = 0;
  #items: crypto[] = [];
  enqueue(element: crypto) {
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

const oQueue = new QueueBlockchain();
oQueue.enqueue({ id: 1, blockchain: "Polygon", price: 550 });
oQueue.enqueue({ id: 2, blockchain: "Polkadot", price: 770 });
oQueue.enqueue({ id: 3, blockchain: "Bitcoin", price: 1520 });
oQueue.enqueue({ id: 4, blockchain: "Polygon", price: 340 });
console.log(oQueue.dequeue());
console.log(oQueue.dequeue());
console.log(oQueue.size());

// try {
//   oQueue.dequeue();
// } catch (error) {
//   console.log(error.message);
// }
