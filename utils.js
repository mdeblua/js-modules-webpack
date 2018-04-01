
const configPessoaFisica = {
  nome: 'templateNome',
  idade: 'templateCalculoIdadede',
  sexo: 'templateCalculoSexo',
};

const PI = 3.14;

function sum(n1, n2) {
  return n1 + n2;
}

function multi(n1, n2) {
  return n1 * n2;
}

function div(n1, n2) {
  return n1 / n2;
}

// exportas tudo, não é uma boa pratica
// export * as utils

// mesmo tipo de expoortacao (named export), mas com outra sintaxe
// possibilidade de exportar com outro nome
// deve ser importado com o nome da exportacao, do contratio pode  tomar o seguinte
// erro: "export 'div' was not found in './utils'
export { multi, div as divisao, PI, configPessoaFisica };

// named export
// ter vários exports dentro de um mesmo arquiv
// só pode chamar com um mesmo nome
// import precisa ser feito atraves de chaves
export function sub(n1, n2) {
  return n1 - n2;
}

// método principal
// só pode haver default por arquivo
// pode ser importado com qualquer nome
// nao precisa utilizar chaves
export default sum;

