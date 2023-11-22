import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string = "0";
  memoria: string = "";
  verifica_zero: boolean = true;
  operador_inserido: boolean = false;
  is_segundo_elemento: boolean = false;
  primeiro_elemento: string = "";
  segundo_elemento: string = "";
  operador: string = "";
  is_novo_calculo: boolean = false;


  constructor() { }

  digitos(valor: string) {
    if (this.is_novo_calculo) {
      this.resetar();
      if(this.is_segundo_elemento){
        this.segundo_elemento += valor;
        this.resultado += valor;
      } else {
        if (this.verifica_zero) {
          this.resultado = valor;
          this.verifica_zero = false;
        } else {
          this.resultado += valor;
        }
      }
    } else {
      if(this.is_segundo_elemento){
        this.segundo_elemento += valor;
        this.resultado += valor;
      } else {
        if (this.verifica_zero) {
          this.resultado = valor;
          this.verifica_zero = false;
        } else {
          this.resultado += valor;
        }
      }
    }

  }

  operadores(operador: string) {
    if (!this.operador_inserido && this.verifica_zero == false) {
      this.primeiro_elemento = this.resultado;
      this.resultado += operador;
      this.operador_inserido = true;
      this.operador = operador;
      this.is_segundo_elemento = true;
    }
  }

  calcular() {

    if (this.operador == "+" && this.segundo_elemento != "") {
      //this.memoria = this.resultado;
      this.resultado = (parseInt(this.primeiro_elemento) + parseInt(this.segundo_elemento)).toString();
      //this.memoria += "=" + this.resultado;
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "-" && this.segundo_elemento != "") {
      this.resultado = (parseInt(this.primeiro_elemento) - parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "*" && this.segundo_elemento != "") {
      this.resultado = (parseInt(this.primeiro_elemento) * parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "/" && this.segundo_elemento != "") {
      this.resultado = (parseInt(this.primeiro_elemento) / parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "²") {
      this.resultado = (parseInt(this.primeiro_elemento) * parseInt(this.primeiro_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + "=" + this.resultado;
      this.is_novo_calculo = true;

    }else {
      if (this.operador == "") {
        alert("Nenhum operador foi selecionado.")
      } /*else if (this.segundo_elemento == "" && this.operador == "") {
        alert("Nenhum elemento foi definido.")
      }*/ else {
        alert("O segundo elemento não foi definido.")
      }
    }
  }

  resetar() {
    this.resultado = "0";
    //this.memoria = ""
    this.verifica_zero = true;
    this.operador_inserido = false;
    this.is_segundo_elemento = false;
    this.primeiro_elemento = "";
    this.segundo_elemento = "";
    this.operador = "";
    this.is_novo_calculo = false;
  }
}  
