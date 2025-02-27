const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  if (c == 0) {
    return 0; 
  } return parseFloat(c.toFixed(1));
};

const ctof = function(c) {
  let f = (c * (9/5) + 32);
  if (f == 32) {
    return 32;
  } return parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
