const frase = "eu sou programador";

main();

function main() {
    const { numero_casas, cifrado } = await salvarJSON();
  const decrypted = julioDecrypter(cifrado, numero_casas).toLocaleLowerCase();
  const shaRes = sha(decrypted);
  attJSON(decrypted, shaRes);

  let fd = new FormData();
  fd.append("answer", fs.createReadStream(`${__dirname}/answer.json`));
  console.log(await postAnswer(fd));
}