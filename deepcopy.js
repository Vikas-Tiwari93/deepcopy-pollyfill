// create a pollyfill named deepcopy

const DeepCopy = function (obj) {
  let objkeys = Object.keys(obj);
  let deepobj = {};
  for (let i = 0; i < objkeys.length; i++) {
    if (typeof obj[objkeys[i]] === 'object') {
      deepobj[objkeys[i]] = DeepCopy(obj[objkeys[i]]);
    } else {
      deepobj[objkeys[i]] = obj[objkeys[i]];
    }
  }
  return deepobj;
};

const a = {
  1: 'vikas',
  2: {
    1: 'ram',
    2: {
      1: 'ravan',
      2: { 1: 'hanuman', 2: 'family' },
    },
  },
};
let deep = DeepCopy(a);
console.log(deep);
