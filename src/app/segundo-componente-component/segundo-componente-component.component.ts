import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente-component',
  templateUrl: './segundo-componente-component.component.html',
  styleUrls: ['./segundo-componente-component.component.css'],
})
export class SegundoComponenteComponentComponent{
  
  
 
    nome = 'Pedro Arthur'
    idade = 18
    telefone = '8399717919'
    dataNascimento ='1999-10-28'
    urlImage = "/assets/light-bulb-gbede85548_1920.jpg"
  

  exibirNome(){
    alert(`A data de nascimendo de ${this.nome} é ${this.dataNascimento}`)
  }
}
