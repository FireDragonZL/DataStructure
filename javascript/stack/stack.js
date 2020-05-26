/**
 * JS实现栈 - 先进后出
 * 1. 实现栈结构常用的方法
 * 2. 每次操作的时候维护栈内元素的个数
 */
class Stack {
  constructor () {
    //super(props)
    this.size = 0
    this.stackStorage = {}
  }

  // 向栈顶添加一个元素
  push (val) {
    this.stackStorage[this.size] = val
    this.size ++
  }

  // 从栈顶拿出一个元素
  pop () {
    if (this.size) {
      return undefined
    }
    this.size --
    let res = this.stackStorage[this.size]
    delete this.stackStorage[this.size]

    return res
  }

  // 返回栈顶元素
  peek () {
    return this.stackStorage[this.size - 1]
  }

  // 返回栈内元素的个数
  length () {
    return this.size
  }
}

export default Stack