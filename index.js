// import * as R from 'ramda';
import { union, uniq } from 'ramda';
// import somar from './utils';
import somar, { sub, multi as multiplicar, divisao, PI, configPessoaFisica } from './utils';

const arr1 = [1, 2, 3, 4, 7, 8, 1, 3, 5, 110];
const arr2 = [17, 16, 44, 4, 5, 99, 0, 1, 2, 77, 88, 7];

const arrUnion = union(arr1, arr2);

function compararNumeros(a, b) {
  return a - b;
}
const arrUniq = uniq(arr1);

console.log(arrUnion.sort(compararNumeros));
console.log(arrUniq.sort(compararNumeros));
console.log(somar(1, 1));
console.log(sub('-10c', 3));
console.log(multiplicar(10, 3));
console.log(divisao(10, 3));
console.log(PI);
console.log(configPessoaFisica);
