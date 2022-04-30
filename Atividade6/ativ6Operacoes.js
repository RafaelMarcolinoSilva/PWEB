function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n1 - Soma (+)\n2 - subtração (-)\n3 - produto (*)\n4 - divisão real (/)\n5 - divisão inteira (%)'));

    if(!operacao || operacao >= 6){
        alert('Erro - Operação Inválida!');
        calculadora();
    } else{
        let n1 = Number(prompt('Insira o primeiro valor: '));
    let n2 = Number(prompt('Insira o segundo valor: '));
    let resultado;

    if(!n1 || !n2){
        alert('Erro - parâmetros inválidos!')
        calculadora();
    }else {
        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }
    
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }
    
        function produto(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }
    
        function divisaoReal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }
    
        function divisaoInteira(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            novaOperacao();
        }
    
    
        function novaOperacao(){
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    
            if(opcao == 1){
                calculadora();
            }else if(opcao == 2){
                alert('Até mais!');
            } else{
                alert('Digite uma opção válida!')
                novaOperacao();
            }
        }
    }
    
    switch(operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break
        case 3:
            produto();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
       
    }

    }
}
     



calculadora();