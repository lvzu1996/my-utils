/*
 * @Author: lvzu 
 * @Modified time: 2017-11-27 18:02:59 
 * @note: 双向循环链表
*/

function Node (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function Llist () {
    // 头节点
    this.head = new Node('head');
    this.head.next = this.head;
    this.length = 1;
    this.display();
}
Llist.prototype = {
    constructor: Llist,
    // 插入节点：将 newNode节点 插入到 node节点 之后
    insertAfter: function (newNode, data) {
       var prevNode = this.find(data);
       newNode.next = prevNode.next;
       newNode.prev = prevNode;
       newNode.next.prev = newNode;
       prevNode.next = newNode; 
       this.length ++;
       this.display();
    },
    // 删除节点
    remove: function (data) {
       if(this.length === 1){
        console.log('error!');
        return
       }
       var node = this.find(data);
       node.prev.next = node.next;
       node.prev = node.next = null;
       this.length --;
       this.display();
    },
    // 查找节点
    find: function (data) {
       var current = this.head;
       while(current && current.data != data){
           current = current.next;
       }
       return current;
    },
    // 显示全部节点
    display: function () {
        var current = this.head
        console.log(current.data);
        current = current.next;
        while (current && current.data != 'head') {
            console.log(current.data)
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
list.insertAfter(new3, 'new2')
list.remove('new3')
list.remove('new2')
list.remove('new1')
list.remove('head')