var idade = 0;
var somaIdade = 0;
var mediaIdade = 0;
var maisVelha = 0;
var maisNova = 0;
var qtPessimo = 0;
var prcBom = 0;
var homem = 0;
var mulher = 0;
var sexo;
var opiniao;

for (i = 0; i < 3; i++){
    idade = parseInt(prompt("Você é o numero "+ [i+1]+"! Digite a sua idade"));
    sexo = prompt("Digite o seu sexo");
    opiniao = parseInt(prompt("Digite a sua opinião referente ao filme, onde ótimo = 4, bom = 3, regular = 2 e ruim = 1"));

    somaIdade = somaIdade + idade;

    if (maisVelha == 0){
        maisVelha = idade;
    }

    else if( idade > maisVelha){
        maisVelha = idade;
    }

    if (maisNova == 0){
        maisNova = idade;
    }

    else if( idade < maisNova){
        maisNova = idade;
    }

    if(sexo == ("m" || "M")){
        homem ++;
    }

    if(sexo == ("f" || "F")){
        mulher ++;
    }

    if (opiniao == (4 || 3)){
        prcBom ++;
    }

    if (opiniao == 1){
        qtPessimo ++;
    }
}

mediaIdade = (somaIdade / 10);
prcBom = ((prcBom / 10)*100);

alert("A média das idades dos pesquisados foi: " + mediaIdade);
alert("A idade da pessoa mais velha é: " + maisVelha);
alert("A idade da pessoa mais nova é: " + maisNova);
alert("A quantidade de pessoas que responderam péssimo foi: " + qtPessimo);
alert("A porcentagem de pessoas que respoderam ótimo ou bom foi de: " + prcBom + "%");
alert("A quantidade de homens que responderam foi de: " + homem+ " e a de mulheres foi de: " + mulher);