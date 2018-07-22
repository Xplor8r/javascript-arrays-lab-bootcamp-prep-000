// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten);
}
function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(Kittens) {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(Kittens) {
  return kittens.shift();
}
function appendKitten(kitten) {
  var newArray = kittens.push(kitten);
  return newArray;
}
function prependKitten(kitten) {
  var newArray = kittens.unshift(kitten);
  return newArray;
}
function removeElementFromEndOfArray(chocolateBars) {
  var newArray = chocolateBars.slice(0, chocolateBars.length - 1);
  return newArray;
}