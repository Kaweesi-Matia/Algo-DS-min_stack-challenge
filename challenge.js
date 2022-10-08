class Stack {
  constructor() {
    this.head = null;
  }
  push(number) {
   let node = new Node(number, this.head);
   this.head = node;
  }
 
  pop() {
    if(!this.head)
      return null;
    let value = this.head.value;
    this.head = this.head.next_node;
    return value;
  }
  min() {
    if (!this.head)
      return null;

    let hold = this.head.next_node;
    let m = this.head.value
    while (hold) {
      if (hold.value < m)
        m = hold.value;
      hold = hold.next_node;
    }

    return m;
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack



