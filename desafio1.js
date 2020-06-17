//CÁLCULO DE IMC

function calculaImc(nome, peso, altura) {
  
  const imc = peso / (altura * altura);
  console.log(imc)

  if(imc >= 30) {
    console.log(`${nome} você está acima do peso!`);
  } else {
    console.log(`${nome} você NÃO está acima do peso!`);
  }

}  
calculaImc('Flavio', 83, 1.86);

//CÁLCULO DE APOSENTADORIA

function calculaAposentadoria(nome, sexo, idade, contribuicao) {

  const validaAposentadoria = idade + contribuicao;
  const homemPodeAposentar = sexo =='M' && contribuicao >= 35 && validaAposentadoria >= 95;
  const mulherPodeAposentar = sexo =='F' && contribuicao >= 30 && validaAposentadoria >= 85;

  if (homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você já pode se aposentar!`);
  } else {
    console.log(`${nome}, infelizmente você ainda não pode se aposentar.`);
  }
}
calculaAposentadoria('Susan', 'F', 54, 30);