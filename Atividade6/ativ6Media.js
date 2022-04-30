var media = 0;
var numero;

for (i = 0; i <3; i ++){
    numero = prompt("Digite a " +[i+1]+ "º nota do aluno");
    numero = parseFloat(numero);
    media += numero;
}

media = (media/3);

alert("A media do respectivo aluno é: " + media)

