function _isInteger(obj) {
 return obj%1 === 0
}

function _getCount(tempDecimal,count){
  while(!_isInteger(tempDecimal)){
    tempDecimal*=10;
    count*=10;
  }
  return count
}

function decCal(decimalA,decimalB,calType){
  var multiple;
  var countA = 1;
  var countB = 1;

  countA = _getCount(decimalA,countA)
  countB = _getCount(decimalB,countB)
  
  multiple = Math.max(countA,countB)
    
  switch (calType) {
    case 0:
      return (decimalA*multiple+decimalB*multiple)/multiple
      break;
    case 1:
      return (decimalA*multiple-decimalB*multiple)/multiple
      break;
    case 2:
      return (decimalA*multiple*decimalB*multiple)/Math.pow(multiple,2)
      break;
    case 3:
      return ((decimalA*multiple)/(decimalB*multiple))
      break;
    default:
      return 'error'
      break;
  }

}

module.exports = {
  decCal
}
