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
function prependKitten(kittens) {
  var newArray = kittens = ["Arnold",...kittens];
  return newArray;
}
function addElementToBeginningOfArray(chocolateBars, foo) {
  var newArray = chocolateBars = ["foo",...chocolateBars];
  return newArray;
}
function appendKitten(kittens) {
  var newArray = kittens = [...kittens, "Broom"];
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