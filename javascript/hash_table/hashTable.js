/**
 * 哈希表：存储键值对的数据结构
 * - 数组 + 链表（数组 + 数组）
 * - 哈希表的查找时间复杂度为O(1)，所以很多人喜欢用对象来做映射，减少遍历循环。
 * 1- add：增加一个键值对
 * 2- remove：删除一个键值对
 * 3- lookup：查找一个键值对的值
 * 4- rehash操作（未实现）
 */
class HashTable {
  constructor(){
    this.bucket = [];    // 存储键值对
    this.capacity = 4;   // 初始化桶数 = 数组的数量
  }

  /**
   * 插入键值对
   * @param {*} key 
   * @param {*} value 
   */
  add (key, value) {
    let index = hash(key, this.capacity);
    let bucket = this.bucket
    let insert = true
    // 桶位是空，则插入数据（嵌套数组）
    if(bucket[index] === undefined){
      bucket[index] = [
        [key, value]
      ];
      return
    }
    // 桶位不为空，则判断key值是否相等
    bucket[index].forEach(element => {
      if (element[0] === key) {
        element[1] = value
        insert = false
      }
    });
    // 卫兵模式
    if (insert === true) {
      bucket[index].push([key, value])
    }
  }

  // 删除键值对
  remove (key) {
    let index = hash(key, this.capacity);
    let bucket = this.bucket;
    // 桶位为空
    if (bucket[index] === undefined) {
      return 'this hashtable bucket is undefined'
    }
    // 桶位不为空，key不存在
    for (let i=0 ; i<bucket[index].length ; i++) {
      if (bucket[index][i][0] === key) {
        // 删除数据元素
        bucket[index].splice(i, 1)
        return bucket
      }
    }
    return 'this hashtable no this key'
  }

  /**
   * 查找键值对
   * @param {*} key 
   */
  lookUp (key) {
    let index = hash(key, this.capacity);
    let bucket = this.bucket;
    // 桶位为空
    if (bucket[index] === undefined) {
      return new Error('NullPointerException - 1')
    }
    // 遍历查找
    for (let i = 0; i < bucket[index].length; i++) {
      if (bucket[index][i][0] === key) {
        return bucket[index][i]
      }
    }

    return new Error('NullPointerException - 2')
  }
}

export default HashTable

/**
 * 将键值转为hash值
 */
const hash = (key, capacity) => {
  let hash = 0
  for (let i=0 ; i<key.length ; i++) {
    // 字符对应的数字
    hash += key.charCodeAt(i);
  }
  // 取余，获取随机桶数
  return hash % capacity
}
