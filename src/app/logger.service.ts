import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

 nomeProduto: string[] = []

 addCarrinho(mensagem:string){
  console.log(`O ${mensagem} foi adicionado ao carrinho!`);
  this.nomeProduto.push(mensagem)
 }
 exibeTodos(){
  console.log(this.nomeProduto);
  
 }
}
