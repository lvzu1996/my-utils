const telRegExp = new RegExp(/^1(3|4|5|7|8)\d{9}$/),
      emailRegExp = new RegExp(/^[\w-]+@([a-z]+)+(\.[a-z]+)+$/),
      urlRegExp = new RegExp(/^(https?:(\/\/)?)?[\.\w-]+(\.[a-zA-Z])*(\.[a-zA-Z]{2,})$/,'i')
      
function isTel(str){
  return telRegExp.test(str)
}

function isEmail(str){
  return emailRegExp.test(str)
}

function isUrl(str){
  return urlRegExp.test(str)
}

module.exports = {
  isTel:isTel,
  isEmail:isEmail,
  isUrl:isUrl
}

