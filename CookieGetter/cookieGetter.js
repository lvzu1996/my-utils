/*
 @Author:lvzu
 @Update:2017/10/16
 
 *cookie操作工具
 *getCookieArr() 返回一个数组，数组中每个元素是一个长度为2的数组，下标1为key2为value
 *getCookieValue(name)  接收一个cookie的key值，返回对应的value，若未查找到，返回""
 *getCookieMap(name) 接收一个cookie的key值，返回一个key=value的键值对
 */

const strCookie = document.cookie;
const arrCookie = strCookie.split("; ");

//返回一个数组，数组中每个元素是一个长度为2的数组，下标1为key2为value
function getCookieArr() {
  var cookieArr = []
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("=");
    if (arr.length != 2) {
      var cookieValue = arr.slice(1, arr.length).join()
      arr = [arr[0],cookieValue]
    }
    cookieArr.push(arr)
  }
  console.log(cookieArr);
  return cookieArr
}

//接收一个cookie的key值，返回对应的value，若未查找到，返回""
function getCookieValue(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name)
            return arr[1];
    }
    return "";
}

//接收一个cookie的key值，返回一个key=value的键值对
function getCookieMap(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name)
            return arr.join('=');
    }
    return "";
}

module.exports = {
  getCookieArr,
  getCookieValue,
  getCookieMap,
}
