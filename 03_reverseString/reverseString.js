const reverseString = function(string) {
    let stringList = string.split('');
    let revStrLst = [];
    let revStr = '';
    for (let i = stringList.length - 1; i >= 0; i--) {
        revStrLst.push(stringList[i]);
    }
    revStr = revStrLst.join('');
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
