# Bootcamp LaunchBase - Desafios 1. 


### Calcula IMC
Neste desafio montei uma função que calcula o IMC de uma pessoa. Basta chamar a função e adicionar as informações conforme estão os parâmetros (nome, peso, altura) da função.  
Lembrando que o nome dele ser colocado em formato 'string'.

EXEMPLO:
`calculaImc('Flavio', 83, 1.86);`
Então flávio tem 83kg e 1.86 de altura. 
Caso o IMC calculado de Flávio seja maior ou igual a 30, será exibido a mensagem `${nome} você está acima do peso!`, caso contrário `${nome} você NÃO está acima do peso!`. 



### Calculo de Aposentadoria
Este desafio é para calcular se uma pessoa com idade X e tempo de contribuição Y está apto para se aposentar ou não. 
São calculos fictícios, pois há diversos fatores para calcular realmente se pessoa pode se aposentar. 

#### O desafio requer trabalhar com as seguintes informações:
* O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
* Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

Se a pessoa estiver apta para se aposentar o programa apresentará a seguinte mensagem no console:
* `${nome}`, você já pode se aposentar!
Caso contrário:
* `${nome}`, infelizmente você ainda não pode se aposentar.


Você precisa chamar a função `calculaAposentadoria()` e passar as informações da pessoa conforme estão os parâmetros da função `'nome', 'sexo', idade, contribuicao`. 
EXEMPLO:
`calculaAposentadoria('Susan', 'F', 54, 30);`
Susan tem 54 anos e contribuiu com 30 anos de trabalho, logo ao somar a sua idade com seu tempo de contribuição chegamos em 84 anos, de acordo com as regras, falta 1 ano de contribuição para a Susan estar apta para se aposentar. 
