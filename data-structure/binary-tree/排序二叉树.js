/*
 * @Author: lvzu 
 * @Modified time: 2017-11-28 12:47:01 
 * @note: 完成了删除部分
*/
function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinaryTree(){
    this.root = null;
}

BinaryTree.prototype = {

    init:function(arrayNode){
        arrayNode.forEach(element => {
           this.insert(this.root,element) ;
        });

    },

    insert:function(currentNode,newNode){
        if(this.root === null){
            this.root = newNode;
            return;
        }
        if(newNode.data < currentNode.data){
            if(currentNode.left === null){
                currentNode.left = newNode;
            }else{
                this.insert(currentNode.left,newNode);
            }
        }
        else{
            if(currentNode.right === null){
                currentNode.right = newNode;
            }else{
                this.insert(currentNode.right,newNode);
            }
        }
    },

    inOrderTraverse:function(callback){
        (function inOrderTraverseNode(currentNode,callback){
            if(currentNode != null){
                inOrderTraverseNode(currentNode.left,callback);
                callback(currentNode.data);
                inOrderTraverseNode(currentNode.right,callback);
            }
        })(this.root,callback);
    },

    preOrderTraverse:function(callback){    
        (function preOrderTraverseNode(currentNode,callback){
            if(currentNode != null){
                debugger;
                var test = typeof(callback);
                callback(currentNode.data);
                preOrderTraverseNode(currentNode.left,callback);
                preOrderTraverseNode(currentNode.right,callback);
            }
        })(this.root,callback);
    },

    postOrderTraverse:function(callback){    
        (function postOrderTraverseNode(currentNode,callback){
            if(currentNode != null){
                debugger;
                var test = typeof(callback);
                postOrderTraverseNode(currentNode.left,callback);
                postOrderTraverseNode(currentNode.right,callback);
                callback(currentNode.data);
            }
        })(this.root,callback);
    },

    getMaxValue:function(){
        var currentNode = this.root;
        while(currentNode.right != null){
            currentNode = currentNode.right;
        }
        return currentNode.data;
    },

    getMinValue:function(){
        var currentNode = this.root;
        while(currentNode.left != null){
            currentNode = currentNode.left;
        }
        return currentNode.data;
    },

    find:function(data){
        function findNode(currentNode,data){
            if(currentNode == null){
                return false;
            }
            if(data < currentNode.data){
                return findNode(currentNode.left,data);
            }else if(data > currentNode.data){
                return findNode(currentNode.right,data);
            }else{
                return true;
            }
        }
        return findNode(this.root,data);
    },

    remove:function(data){
        var topNode = new Node(Number.MAX_SAFE_INTEGER);
        topNode.left = this.root;
        /* dir direction
         * 0:left true
         * 1:right false
         */
        function removeNode(fatherNode,dir){
            function findMaxFather(delNode){
                var currentNode = delNode.left;
                while(currentNode.right != null && currentNode.right.right != null){
                    currentNode = currentNode.right; 
                }
                return currentNode;
            }
            //删fatherNode左子节点
            if(dir){
                var delNode = fatherNode.left;
                var flag = false;
                //如果被删除的节点没有左右子节点
                delNode.left == null && delNode.right == null && (fatherNode.left = null,flag = true);
                //被删除的节点只有右节点
                delNode.left == null && delNode.right != null && (fatherNode.left = delNode.right,flag = true);
                //被删除的节点只有左节点
                delNode.left != null && delNode.right == null && (fatherNode.left = delNode.left,flag = true);

                //被删除的节点同时有左右节点
                if(!flag){
                    var maxFather = findMaxFather(delNode);
                    delNode.data = maxFather.right.data;
                    maxFather.right = null;
                    flag = true;
                }
                
                return flag;
            }
            //删fatherNode右子节点
            else{
                var delNode = fatherNode.right;
                var flag = false;
                //如果被删除的节点没有左右子节点
                delNode.left == null && delNode.right == null && (fatherNode.right = null,flag = true);
                //被删除的节点只有右节点
                delNode.left == null && delNode.right != null && (fatherNode.right = delNode.right,flag = true);
                //被删除的节点只有左节点
                delNode.left != null && delNode.right == null && (fatherNode.right = delNode.left,flag = true);

                //被删除的节点同时有左右节点
                if(!flag){
                    var maxFather = findMaxFather(delNode);
                    delNode.data = maxFather.right.data;
                    maxFather.right = null;
                    flag = true;
                }

                return flag;
            }
        }
        function findChild(currentNode,data){
            //找不到这个节点
            if((data < currentNode.data && currentNode.left == null) || (data > currentNode.data && currentNode.right == null)){
                return false;
            }
            //找到了左右节点
            if(currentNode.left != null && data == currentNode.left.data){
                return removeNode(currentNode,true);
            }
            else if(currentNode.right != null && data == currentNode.right.data){
                return removeNode(currentNode,false);
            }
            //继续往左子树找
            if(data < currentNode.data && currentNode.left != null){
                return findChild(currentNode.left,data);
            }
            //继续往右子树找
            if(data > currentNode.data && currentNode.right != null){
                return findChild(currentNode.right,data);
            }
        }
        return findChild(topNode,data);
    },

}

var binaryTree = new BinaryTree();
var array = [4,2,8,1,3,9,0,5.16,7.25,6,1.5,1.2,1.6,1.1,1.3,1.55,1.7];
var arrayNode = array.map(element => new Node(element));

var callback = key => {console.log(key)}

binaryTree.init(arrayNode);

// binaryTree.inOrderTraverse(callback);
// binaryTree.preOrderTraverse(callback)
// binaryTree.postOrderTraverse(callback)
// console.log(binaryTree.getMaxValue())
// console.log(binaryTree.getMinValue())
// console.log(binaryTree.find(5.16));
console.log(binaryTree.remove(1.5))
binaryTree.inOrderTraverse(callback);
