function Conta(){
    var nomeCorrentista;
    var banco;
    var numeroConta;
    var saldo;
    this.getNomeCorrentista = function(){
        return nomeCorrentista
    }

    this.setNomeCorrentista = function(nc){
        nomeCorrentista = nc;
    }
    
    this.getBanco = function(){
        return banco
    }

    this.setBanco = function(b){
        banco = b;
    }

    this.getNumeroConta = function(){
        return numeroConta
    }

    this.setNumeroConta = function(n){
        numeroConta = n;
    }

    this.getSaldo = function(){
        return saldo
    }

    this.setSaldo = function(ss){
        saldo = ss;
    }
}

function Corrente(){
    var saldoEspecial;
    this.getSaldoEspecial = function(){
        return saldoEspecial
    }

    this.setSaldoEspecial = function(s){
        saldoEspecial = s;
    }
}

function Poupanca(){
    var juros;
    var dataVencimento;
    this.setJuros = function(j){
        juros = j;
    }

    this.getJuros = function(){
        return juros;
    }

    this.setDataVencimento = function(dv){
        dataVencimento = dv;
    }

    this.getDataVencimento = function(){
        return dataVencimento
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

correntista = new Corrente();
poupantista = new Poupanca();

poupantista.setNomeCorrentista("JJ Geral Junto");
poupantista.setBanco("Esse Mesmo");
poupantista.setNumeroConta(123455);
poupantista.setSaldo(255.14);
poupantista.setDataVencimento("25/12/1968");
poupantista.setJuros(0.21);

correntista.setNomeCorrentista("Cuca Beludo");
correntista.setBanco("Aquele Mesmo");
correntista.setNumeroConta(355455);
correntista.setSaldo(25.19);
correntista.setSaldoEspecial(0);

document.write("<h2>Usuário da conta corrente de nome: " + correntista.getNomeCorrentista()+ ", banco: "+ correntista.getBanco()+" , numero da conta: "+ correntista.getNumeroConta()+", saldo: R$"+ correntista.getSaldo()+", e saldo especial: "+correntista.getSaldoEspecial()"<h2>");
document.write("<br>")
document.write("Usuário da conta poupança de nome: " + poupantista.getNomeCorrentista()+ ", banco: "+ poupantista.getBanco()+" , numero da conta: "+ poupantista.getNumeroConta()+", saldo: R$"+ poupantista.getSaldo()+", data de vencimento: "+poupantista.getDataVencimento()+ " e juros de : "+poupantista.getJuros());

