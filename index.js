// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    let newcat = [...cats];
    newcat.push(name);
    return newcat;
}
function prependCat(name) {
    let newcat = [...cats];
    newcat.unshift(name);
    return newcat;
}
function removeLastCat() {
    let newcat = [...cats];
    newcat.pop()
    return newcat
}
function removeFirstCat() {
    let newcat = [...cats];
    newcat.shift();
    return newcat
}
