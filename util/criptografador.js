const alfabeto = require("./letras");

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

module.exports = (frase, n) => {
  var result = "";
  for (var i = 0; i < frase.length; i++) {
    if (isLetter(frase[i])) {
      const index = alfabeto.indexOf(frase[i]);
      if (index + n >= alfabeto.length) {
        const newIndex = n + index - alfabeto.length;
        result += alfabeto[newIndex];
      } else {
        result += alfabeto[index + n];
      }
    } else {
      result += frase[i];
    }
  }
  return result;
};
