// 顶点类
function Vertex (data, visited) {
    // 顶点的数据
    this.data = data
    // 标示着顶点是否被访问过
    this.visited = visited
}

function Graph (vertexs,errorCallback) {

    //顶点数组
    this.vertexs = vertexs;
    //错误回调
    this.errorCallback = errorCallback;
    // 顶点数量
    this.quantity = vertexs.length;
    // 边的数量
    this.edges = 0;
    // 邻接表数组
    this.adj = [];
    //值set
    this.valueSet = new Set();

    for (let i = 0; i < this.quantity; i++) {
        this.adj[i] = [];
        this.valueSet.add(this.vertexs[i].data);
    }


}

Graph.prototype = {

    findVert : function(data){
        var index = 0;
        for(let i = 0 ; i < this.quantity ; i ++){
            if(this.vertexs[i].data === data){
                index = i;
            }
        }
        return index;
    },

    addVertex : function(vertex){
        this.valueSet.add(vertex.data);
        this.quantity ++;
        if(this.valueSet.size != this.quantity){
            this.errorCallback('error!duplicated value')
            this.quantity --;
            return
        }
        this.adj[this.quantity-1] = [];
    },

    removeVertex : function(data){
        var index = -1;
        for(let i = 0 ; i < this.quantity ; i ++ ){
            if(this.vertexs[i].data === data){
                index = i;
                this.vertexs.splice(i,1);
                break;
            }
        }
        if(index === -1){
            this.errorCallback('error!can\'t find vertex values '+data +' !');
            return;
        }
        this.quantity --;
        for(let i of this.adj){
            if(i.indexOf(data) != -1){
                i.splice(i.indexOf(data),1);
                this.edges -- ;
            }
        }
        this.edges -= this.adj[index].length;
        this.adj.splice(index,1);
    },

    addEdge : function(data1,data2){
        this.adj[this.findVert(data1)].push(data2)
        this.adj[this.findVert(data2)].push(data1)
        this.edges ++;
    },

    removeEdge:function(data1,data2){
        var index1
    },

    display : function(){
        for(let i of this.adj){
            console.log(i)
        }
    },

}

let vertexs = [
    new Vertex(0),
    new Vertex(1),
    new Vertex(2),
    new Vertex(3),
    new Vertex(4)
]

var errorCallback = err => {console.log(err)}

var graph = new Graph(vertexs,errorCallback);
graph.addEdge(0,4);
graph.addEdge(0,3);
graph.addEdge(3,1);
graph.addVertex(new Vertex(4))
graph.addVertex(new Vertex(5))
graph.display();
graph.removeVertex(0);
graph.removeVertex(7)
graph.display();
