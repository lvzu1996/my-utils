//生成随机序列标识,默认6位
function getRandomId(num) {
    var num = num > 0 ? num : 6;
    var collectStr = "abcdefghijklmnopqrstuvwxyz0123456789",
        i = 0,
        str = "";

    while (i < num) {
        str += collectStr[Math.round(Math.random() * 35)];
        i++
    }
    return str;
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}


function getAthority(count) {
    var a = []
    var s = 1
    
    function _count(c){
        var i = 1 ;
        var a = 0;
        for(let i = 0 ;i < c ; i ++){
            a+=i;
        }
    }
    for(var i = 0 ; i < count ; i ++){
        a.push(_count(i))
    }
}