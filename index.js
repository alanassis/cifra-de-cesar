const criptografador = require("./util/criptografador");
const descriptografador = require("./util/descriptografador");

const frase = "abcdefghijklmnopqrstuvwxyz";
const numero_casas = 2;

const mode = 0; // 0 para criptografar - 1 para descriptografar

main();

function main() {
  if (mode == 0) {
    const resposta = criptografador(frase, numero_casas);
    console.log(resposta);
  } else if (mode == 1) {
    const resposta = descriptografador(frase, numero_casas);
    console.log(resposta);
  }
}
