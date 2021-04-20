EX1:
function hasSpaces(str) {
  if (str.indexOf(' ') >= 0) {
    return true
  } else {
    return false
  }
}
console.log (hasSpaces("jawek behy"));

EX 2:

function voweles(str) {
  return str.replace(/[^aeiou]/gi, "").length;
};
EX3:
function vowelCont(mot, sym){

  return mot.replace(/[aeiuo]/gi,sym)
}
console.log(vowelCont("ayaa eyhdida", "#"));


EX4:
function math(str){
pattern=/[0-9][/*-+][0-9]/;
return pattern.test(str);
}
console.log(math("18*10"));

