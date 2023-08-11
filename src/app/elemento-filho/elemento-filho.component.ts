import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-elemento-filho',
  templateUrl: './elemento-filho.component.html',
  styleUrls: ['./elemento-filho.component.css']
})
export class ElementoFilhoComponent {

  @Input() sobreNome = ""
  @Output() mostraNome = new EventEmitter()
  nome = ""
}
