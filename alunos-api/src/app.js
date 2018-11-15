const express = require('express') //importacao do pacote
const app = express() //instanciando express
const cors = require('cors')

const alunos = [
  {
    nome: 'Aluno1',
    idade: 12
  },
  {
    nome: 'Aluno2',
    idade: 13
  },
  {
    nome: 'Aluno3',
    idade: 14
  },
  {
    nome: 'Aluno4',
    idade: 15
  }
]

app.use(cors()) //habilitando cors na nossa aplicacao

app.get('/api/v1/alunos', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.send(alunos)
})

app.listen(3000) //execucao do servidor