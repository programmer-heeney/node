let count = 0;

function increase() {
    count++;
}

function getCount() {
    return count;
}

module.exports.getCount = getCount;
// module.exports.increase = increase;
console.log(module.exports === exports); // true
exports = {}; // moduel.exports와 exports가 전혀 달라짐
console.log(module.exports === exports); // false
exports.increase = increase;
console.log(module);