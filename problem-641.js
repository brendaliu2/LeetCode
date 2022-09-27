/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
  this.length = k;
  this.front = null;
  this.rear = null;
  this.queue = [];
};

/**
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  if(this.queue.length === this.length) return false;

  this.queue.unshift(value);
  this.front = value;
  this.rear = this.queue.at(-1);

  return true;
};

/**
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
  if(this.queue.length === this.length) return false;

  if(!this.queue.length) this.front = value;

  this.queue.push(value);
  this.rear = value

  return true;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
  if(!this.queue.length) return false;

  this.queue.shift();
  this.front = this.queue[0];

  return true;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  if(!this.queue.length) return false;

  this.queue.pop();
  this.rear = this.queue.at(-1);

  return true;
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  if(!this.queue.length) return -1;

  return this.queue[0];
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  if(!this.queue.length) return -1;

  return this.queue.at(-1);
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  if(!this.queue.length) return true;

  return false;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  if(this.length === this.queue.length) return true;

  return false;
};

/**
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/