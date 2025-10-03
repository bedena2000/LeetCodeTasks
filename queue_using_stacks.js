var MyQueue = function () {
  this.first = {
    value: null,
    next: null,
  };

  this.last = this.first;
  this.length = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  const newNode = { value: x, next: null };
  if (this.length === 0) {
    this.first = newNode;
    this.last = newNode;
  } else {
    const temp = this.last;
    this.last.next = newNode;
    this.last = newNode;
  }

  this.length++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
     if(!this.first) return 0;

  const firstNode = this.first;
  this.first = this.first.next;
  this.length--;

  if(!this.first) {
    this.last = null;
  }

  return firstNode.value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.first.value;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
