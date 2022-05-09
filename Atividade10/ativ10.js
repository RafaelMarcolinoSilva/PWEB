// RA e nome;
var Aluno01 = {};

Aluno01.RA = 1040;
Aluno01.nome = "Rafael";

var aluno = {
ra : 1041,
nome : "Rafael1"
}

function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;
}

var aluno01 = new Aluno (1042, "Rafael2");

alert("Nome do Aluno: " + Aluno01.nome + " RA: " + Aluno01.RA);

alert("Nome do Aluno2: " + aluno.nome + " RA: " + aluno.ra);

alert("Nome do Aluno3: " + aluno01.nome + " RA: " + aluno01.ra);

