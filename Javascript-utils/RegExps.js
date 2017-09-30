const telRegExp = new RegExp(/^1(3|4|5|7|8)\d{9}$/)
const emailRegExp = new RegExp(/^[\w-]+@([a-z]+)+(\.[a-z]+)+$/)
const urlRegExp = new RegExp(/^(https?:(\/\/)?)?[\.\w-]+(\.[a-zA-Z])*(\.[a-zA-Z]{2,})$/,'i')
const usernameExp = new RegExp(/^[\w]{6,16}$/)
// const passwordExp = new RegExp(/^[\w\.]$/)
      
function isTel(str){
  return telRegExp.test(str)
}

function isEmail(str){
  return emailRegExp.test(str)
}

function isUrl(str){
  return urlRegExp.test(str)
}

function isUsername(str){
  return usernameExp.test(str)
}

module.exports = {
  isTel,
  isEmail,
  isUrl,
  isUsername
}
