import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {
  timer = new Date();
  horario: any = null;
  @Input() nome = "";

  ngOnInit(): void {
    console.log('O evento onInit disparou');
    this.horario = setInterval(() => {
      this.timer = new Date();
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  ngOnDestroy(): void {
    
  }
}
