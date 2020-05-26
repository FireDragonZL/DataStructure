/**
 * JS实现队列 - 先进先出
 */
class ArrayQueue {
  constructor () {
    this.collection = []
  }

  // 从队尾添加元素
  enqueue (val) {
    this.collection.push(val)
  }

  // 从队首删除元素
  dequeue () {
    this.collection.shift()
  }

  // 获得队首的元素
  getFront () {
    return this.collection[0]
  }

  // 返回队列元素个数
  getSize () {
    return this.collection.length
  }
}

export default ArrayQueue