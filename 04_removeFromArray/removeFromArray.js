const removeFromArray = function(array, num) {
    let args = Array.from(arguments);
    args.splice(0, 1);
    return array.filter(item => args.indexOf(item) < 0)
};

// Do not edit below this line
module.exports = removeFromArray;
