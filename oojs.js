const inputProp = document.querySelector('#propriedade')
const inputValor = document.querySelector('#valor')
const button = document.querySelector('#button')



var pessoa = {
  nome: {
    primeiro: 'Bob',
    segundo: 'Smith'
  },
  idade: 32,
  sexo: "masculino",
  interesses: ["música", "esquiar"],
  bio: function () {
    console.log(
      this.nome[0] + " " + this.nome[1] + " tem " + this.idade + " anos de idade. Ele gosta de " + this.interesses[0] + " e " + this.interesses[1] + "."
    );
  },
  saudacao: function () {
    console.log("Oi! Eu sou " + this.nome[0] + ".");
  },
};



button.addEventListener('click', (e) => {
  e.preventDefault()
  var dataName = inputProp.value
  var dataValue = inputValor.value
  //declaração de propriedades e métodos
  pessoa['olhos'] = 'castanho'
  pessoa.altura = 1.74
  pessoa.despedida = function () {
    console.log('Até mais')
  }
  pessoa[dataName] = dataValue
  console.log(pessoa)
  console.log(pessoa['nome']) //notação de colchetes
  console.log(pessoa.nome.segundo) //notação de ponto

})