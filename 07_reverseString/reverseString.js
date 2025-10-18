const reverseString = function (word) {
  let i = word.length - 1;
  reversed = "";

  while (i >= 0) {
    reversed += word[i];
    i--;
  }

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
