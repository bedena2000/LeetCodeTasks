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
    this.length++;
  } else if (this.length === 1) {
    this.last = newNode;
  } else {
    const temp = this.last;
    this.last.next = newNode;
    this.last = newNode;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const firstElement = this.first.value;

  this.first = this.first.next;

  this.length--;
  return firstElement;
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
  return !this.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
