/*
 * @Author: lvzu 
 * @Modified time: 2017-11-27 18:02:15 
 * @note: 排序二叉树
*/

function Node(data){
    this.data = data
    this.left = null
    this.right = null
}

function BinaryTree(){
    this.root = null
}

BinaryTree.prototype = {

    init:function(arrayNode){
        arrayNode.forEach(element => {
           this.insert(this.root,element) 
        });

    },

    insert:function(currentNode,newNode){
        if(this.root === null){
            this.root = newNode
            return
        }
        if(newNode.data < currentNode.data){
            if(currentNode.left === null){
                currentNode.left = newNode
            }else{
                this.insert(currentNode.left,newNode)
            }
        }
        else{
            if(currentNode.right === null){
                currentNode.right = newNode
            }else{
                this.insert(currentNode.right,newNode)
            }
        }
    },

    inOrderTraverse:function(callback){
        (function inOrderTraverseNode(currentNode,callback){
            if(currentNode != null){
                inOrderTraverseNode(currentNode.left,callback)
                callback(currentNode.data)
                inOrderTraverseNode(currentNode.right,callback)
            }
        })(this.root,callback)
    },

    preOrderTraverse:function(callback){    
        (function preOrderTraverseNode(currentNode,callback){
            if(currentNode != null){
                debugger
                var test = typeof(callback)
                callback(currentNode.data)
                preOrderTraverseNode(currentNode.left,callback)
                preOrderTraverseNode(currentNode.right,callback)
            }
        })(this.root,callback)
    },

    postOrderTraverse:function(callback){    
        (function postOrderTraverseNode(currentNode,callback){
            if(currentNode != null){
                debugger
                var test = typeof(callback)
                postOrderTraverseNode(currentNode.left,callback)
                postOrderTraverseNode(currentNode.right,callback)
                callback(currentNode.data)
            }
        })(this.root,callback)
    },

}

var binaryTree = new BinaryTree()
var array = [4,2,8,1,3,9,0,5,7,6]
var arrayNode = array.map(element => new Node(element))

var callback = key => {console.log(key)}

binaryTree.init(arrayNode)

binaryTree.inOrderTraverse(callback)
binaryTree.preOrderTraverse(callback)
binaryTree.postOrderTraverse(callback)