import { Component } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent {

  fontSized = 16;
  size = 2;
  textoDigitado = ""


  increaseFont(){

    this.fontSized += this.size;

  }
  decreaseFont(){

    this.fontSized -= this.size;

  }
}
