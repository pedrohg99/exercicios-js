const nome = "Pedro";
if (nome) {
  console.log("Olá,", nome);
} else {
  console.log("Ainda não sei o seu nome");
}

const idade = 29;

if (idade != null) {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else if (idade >= 0 && idade < 18) {
    console.log("Menor de idade");
  }
}
