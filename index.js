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
function prependKitten(Arnold) {
  var newArray = kittens = [...kittens, 'Arnold'];
  return newArray;
}
function removeLastKitten(Kitten) {
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}
function removeFirstKitten(Kitten) {
  var newArray = kittens.slice(1);
  return newArray;
}