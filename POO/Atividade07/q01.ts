export class Pessoa {
    constructor(public nome: string) {
        this.nome = nome;
    }
}

export  class Conta {

    constructor(public numero: string, public saldo: number, public cliente: Pessoa) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    nomeCliente() {
        return this.cliente.nome;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero );
    }
}

export class Banco {
    constructor(public nomeBanco: string) {
        this.nomeBanco = nomeBanco
    }

    contas: Conta[] = [];

    inserir(conta: Conta): void {
        
        if(this.contas[0] === undefined){
            this.contas.push(conta)
        }else if(this.consultar(conta)) {
            this.contas.push(conta)
        } else {
            console.log(`Número ${conta.numero} já existe`)
        }
    }

    alterar(conta: Conta): void {}
    excluir(numero: string): void {
        let index: number = this.consultarIndex(numero);
        if (index != -1) {
            for (let i: number = index; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
            this.contas.pop();
        }
    }
    
    consultar(Tconta: Conta): boolean {
            for(let conta of this.contas) {
                if(Tconta.numero === conta.numero) {
                break
            }

            return true
        }
        
        return false
    }

    consultarIndex(numero: string): number {
        let index: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
            index = i;
            break;
            }
        }
        return index;
    }

    sacar(numero: string, valor: number): void {
        for(let conta of this.contas) {
            if(numero === conta.numero) {
                conta.saldo -= valor
            }
        }
    }

    depositar(numero: string, valor: number): void {
        for(let conta of this.contas) {
            if(numero === conta.numero) {
                conta.saldo += valor
            }
        }
    }

    transfeir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        this.sacar(numeroOrigem, valor)
        this.depositar(numeroDestino, valor)
    }

    quantidadeContas(): number {
        return this.contas.length
    }

    dinheiroDepositado(): number {
        let soma: number = 0

        for(let conta of this.contas) {
            soma+= conta.saldo
        }

        return soma
    }

    mediaSaldo(): number{
        return this.dinheiroDepositado() / this.quantidadeContas()
    }
}

let p1: Pessoa = new Pessoa("Emanuel")
let p2: Pessoa = new Pessoa("Italo")

let c1: Conta = new Conta("10", 1000, p1)
let c2: Conta = new Conta("24", 0, p2)

let b1: Banco = new Banco("Banco")



b1.inserir(c1)
b1.inserir(c1)
b1.inserir(c2)

b1.sacar("10", 100)
b1.depositar("10", 200)

b1.transfeir("24", "10", 1000)

console.log(b1.quantidadeContas())
console.log(b1.contas)
console.log(b1.dinheiroDepositado())
console.log(b1.mediaSaldo())
