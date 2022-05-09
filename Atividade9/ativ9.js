v1 = parseInt(prompt("Digite o promeiro valor para a comparação: "));
v2 = parseInt(prompt("Digite o segundo valor para a comparação: "));
v3 = parseInt(prompt("Digite o terceiro valor para a comparação: "));

var valores = [v1,v2,v3];

function maior(v1,v2,v3){
    if(v1 > v2 && v1 > v3){
        return v1;
    }

    else if( v2 > v1 && v2 > v3){
        return v2;
    }

    else{
        return v3;
    }
}

function ordemCrescente(v1,v2,v3){

    valores.sort(function(a,b){return a-b})
    alert("Ordem crescente dos elementos:")
    alert(valores);
};

alert("O maior valor é: " + maior(v1,v2,v3));