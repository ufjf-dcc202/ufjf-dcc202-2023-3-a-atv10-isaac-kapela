let maria = 2;
let joao = 1;

 function deJoaoParaMaria() {
  maria += joao;
  joao = 0;
}


 function deMariaParaJoao() {
  joao += maria;
  maria = 0;
}

 function getMaria() {
  return maria;
}
 function getJoao() {
  return joao;
}

export function setMaria(value) {
  maria = value;
}

export function setJoao(value) {
  joao = value;
}