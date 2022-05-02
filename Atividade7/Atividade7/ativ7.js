alert("Vamos Jogar Pedra, Papel e Tesoura! Escolha 1 para Pedra, 2 para Papel e 3 para Tesoura!")
var usuario = prompt("Digite um valor de 1 a 3:");
var numero = parseInt(usuario);
//1 = pedra  2 = papel  3 = tesoura


var computador = Math.random() * 100;

computador = Math.floor(computador);



if (numero == 1){
    alert("Você escolheu Pedra");
}

if (numero == 2){
    alert("Você escolheu Papel");
}

if (numero == 3){
    alert("Você escolheu Tesoura");
}

if (computador <= 33){
    alert("O computador escolheu Pedra");
}

if ((computador >= 34 && computador <66)){
    alert("O computador escolheu Papel");
}

if (computador >= 66){
    alert("O computador escolheu Tesoura");
}

if ((computador < 34 && numero == 1) ||((computador >=34 && computador <66) && numero == 2) || (computador >= 66 && numero ==3)){
    alert("Deu empate, escolhas iguais!");
}

if ((computador < 34 && numero == 3) ||((computador >=34 && computador <66) && numero == 1) || (computador >= 66 && numero ==2)){
    alert("Você perdeu! A escolha do computador foi melhor!!!");
}

if ((computador < 34 && numero == 2) ||((computador >=34 && computador <66) && numero == 3) || (computador >= 66 && numero ==1)){
    alert("Muito bem! Sua escolha foi melhor!");
}