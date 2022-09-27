const sumAll = function(x, y) {
    let num = 0
    if (typeof(x) != "number" || x < 0 || typeof(y) != "number" || y < 0 ) {
        return 'ERROR';
    }
    if (x < y) {
        smallNum = x;
        bigNum = y;
    } else {
        smallNum = y;
        bigNum = x;
    }
    for (let i = bigNum; i >= smallNum; i--) {
        num += i;
    }
    return num;
};

console.log(sumAll(1, '90'));

// Do not edit below this line
module.exports = sumAll;
