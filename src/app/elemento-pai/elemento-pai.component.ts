import { Component } from '@angular/core';

@Component({
  selector: 'app-elemento-pai',
  templateUrl: './elemento-pai.component.html',
  styleUrls: ['./elemento-pai.component.css']
})
export class ElementoPaiComponent {

  sobreNome = ""
 
  mostraNomeCompleto(nome: any){

    alert(` O nome completo é: ${nome}`)
  }

}
