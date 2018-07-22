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
function removeLastKitten(kittens) {
  var newArray = kittens.slice(0, kittens - 2);
  return newArray;
}