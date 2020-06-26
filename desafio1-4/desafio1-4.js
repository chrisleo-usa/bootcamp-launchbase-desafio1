// Crie um programa para realizar operações bancárias na conta de um usuário.

// Comece criando um objeto com o nome do usuário, suas transações e saldo.

// As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

// Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

function createTransaction(transaction) {
  //adicionado transação na variável user. 
  user.transactions.push(transaction)

  if (transaction.type === 'credit') {
    user.balance = user.balance + transaction.value;
  } else { //debit
    user.balance = user.balance - transaction.value;
  }
}
createTransaction({
  type: 'debit',
  value: 150
})

createTransaction({
  type: 'debit',
  value: 200
})

function getHigherTransactionByType(typeTransaction) {
  //Para capturar a transação de maior valor. 
  let higherTransaction
  //Ponto de partida para o Maior Valor. 
  let higherValue = 0

  //para transaction de user.transactions
  for(let transaction of user.transactions) {
    // transaction são os valores colocados na função createTransaction(transaction)

    //se o tipo da transaction for igual ao parâmetro da função getHigherTransactionByType (typeTransaction) "E" se o valor da transaction for maior que higherValue.
    if (transaction.type == typeTransaction && transaction.value > higherValue) {
      //então o higherValue recebe o valor da transaction.
      higherValue = transaction.value;
      //A transação de maior valor receberá o objeto transaction. 
      higherTransaction = transaction
    }
  }
  // retorna o objeto da transação de maior valor com aquele tipo
  return higherTransaction
  //Depois do return o FOR é parado. 
}


function getAverageTransactionValue() {
  //variável soma inicia com 0
  let sum = 0;

  //para Transaction de user.transactions
  for (let transaction of user.transactions) {
    //realizar soma + o valor da transaction. 
    sum += transaction.value
  }

  //retorna soma / número de transactions que temos em user (media). 
  return sum / user.transactions.length
}
console.log(getHigherTransactionByType('debit'))

function getTransactionsCount() {
  // ponto de partida para count
  let count = {
    credit: 0,
    debit: 0
  }

  //para transaction de user.transactions 
  for (let transaction of user.transactions) {
    //se o tipo de transaction for igual a credit
    if(transaction.type === 'credit') {
      //implementar na variável count a chave credit.
      count.credit++
      
      //se não, implementar debit. 
    } else {
      count.debit++
    }
  }

  return count
}

console.log(getAverageTransactionValue())
console.log(getTransactionsCount())