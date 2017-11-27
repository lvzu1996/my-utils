/*
 * @Author: lvzu 
 * @Modified time: 2017-11-27 18:02:45 
 * @note: 双向链表
*/


function Node (data) {
    this.data = data
    this.next = null
    this.prev = null
}

function Llist () {
    // 头节点
    this.head = new Node('head')
}
Llist.prototype = {
    constructor: Llist,
    // 插入节点：将 newNode节点 插入到 node节点 之后
    insertAfter: function (newNode, data) {
        var target = this.find(data)
        newNode.next = target.next
        if (target.next) {
            target.next.prev = newNode
        }
        target.next = newNode
        newNode.prev = target
    },
    // 删除节点
    remove: function (data) {
        var target = this.find(data)
        target.prev.next = target.next
        target.next.prev = target.prev
        target.next = target.prev = null
    },
    // 查找节点
    find: function (data) {
        var current = this.head
        while (current && current.data != data) {
            current = current.next
        }
        return current
    },
    // 显示全部节点
    display: function () {
        var current = this.head
        while (current.next) {
            console.log(current.next.data)
            current = current.next
        }
        console.log('======')
    }
}


var list = new Llist()
var new1 = new Node('new1')
var new2 = new Node('new2')
var new3 = new Node('new3')
list.insertAfter(new1, 'head')
list.insertAfter(new2, 'new1')
list.insertAfter(new3, 'new1')
list.display()  // 输出：new1 new3 new2
list.remove('new3')
list.display()  // 输出：new1 new2