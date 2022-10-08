const Stack = require('./challenge')
const assert = require('assert')

describe('Tests', function () { 
  it('min_method_works', function () {
    // Failure message: 
    // This is order of method calls: push(5) -> min -> push(3) -> min -> pop -> min
    const stack = new Stack()
    stack.push(5)
    assert(stack.min() === 5)

    stack.push(3)
    assert(stack.min() === 3)

    stack.pop()
    assert(stack.min() === 5)
  })
})
