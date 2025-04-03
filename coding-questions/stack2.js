/*
NOTE: Create a stack like data structure which have push, pop, top, getMin methods
with o(1) time complexity.

- adobe
*/

class Stack2 {
    constructor() {
        this.stack = []
        this.sortedMins = []
        this.currentMin = Infinity
    }

    push(num) {
        this.stack.push(num)
        this.currentMin = Math.min(this.currentMin, num)
        this.sortedMins.push(this.currentMin)
    }

    pop() {
        if (this.stack.length === 0) {
            return 'Stack is Empty!!'
        }
        this.currentMin = this.sortedMins.pop()
        return this.stack.pop()
    }

    getMin() {
        if (this.stack.length === 0) {
            return 'Stack is Empty!!'
        }
        return this.currentMin
    }

    top() {
        return this.stack[this.stack.length - 1]
    }
}

const stack = new Stack2()

stack.push(2)
stack.push(5)
stack.push(1)
stack.push(9)

stack.getMin()
stack.pop()
stack.pop()
stack.getMin()