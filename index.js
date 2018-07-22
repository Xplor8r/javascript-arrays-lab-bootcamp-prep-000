// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten);
}
function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(kittens) {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(kittens) {
  return kittens.shift();
}
var kittens= ["Milo", "Otis", "Garfield"]
function appendKitten(kitten) {
  var newArray = kittens.push(kitten);
  return newArray;
}
function prependKitten(kitten) {
  var newArray = kittens.unshift(kitten);
  return newArray;
}
function removeLastKitten(kittens) {
  var newArray = Kittens.slice(0, Kittens.length - 1);
  return newArray;
}