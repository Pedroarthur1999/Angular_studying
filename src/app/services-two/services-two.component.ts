import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-services-two',
  templateUrl: './services-two.component.html',
  styleUrls: ['./services-two.component.css'],
})
export class ServicesTwoComponent {
  produto = '';

  constructor(private logger: LoggerService) {}

  adicionarProduto() {
    this.logger.addCarrinho(this.produto);
  }
  exibir() {
    this.logger.exibeTodos();
  }
}
