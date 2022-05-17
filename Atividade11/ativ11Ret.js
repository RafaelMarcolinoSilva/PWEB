var altura = parseFloat(prompt("Informe a altura do seu Retangulo:"));

var largura = parseFloat(prompt("Informe a largura do seu Retangulo:"));


class Retangulo{
    constructor(altura,largura){
        this.altura = altura;
        this.largura = largura;
    }

    calcArea(){
        return this.altura * this.largura;
    }

    calcPerimetro(){
        return this.altura*2 + this.largura*2;
    }
}

objRetangulo = new Retangulo(altura,largura);

alert("A área do Retangulo com as medidas inseridas é de: " + objRetangulo.calcArea());
alert("O perímetro do Retangulo com as medidas inseridas é de: " + objRetangulo.calcPerimetro());