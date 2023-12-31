import { Component } from '@angular/core';
import { Celular } from '../types';

@Component({
  selector: 'app-lista-celulares',
  templateUrl: './lista-celulares.component.html',
  styleUrls: ['./lista-celulares.component.css']
})
export class ListaCelularesComponent {

  celulares: Celular[] = [
    {id:1, nome: "Iphone X", descricao:"Desenvolvido em 2017", esgotado: false, photo:"/assets/iphone-x.png"},
    {id:2, nome: "Iphone 11", descricao:"Desenvolvido em 2020", esgotado: false,photo:"/assets/iphone-11.jpg"},
    {id:3, nome: "Iphone 12", descricao:"Desenvolvido em 2021", esgotado: false,photo:"/assets/iphone-12.jpg"},
    {id:4, nome: "Iphone 13", descricao:"Desenvolvido em 2022", esgotado: true, photo:"/assets/iphone-13.jpg"}
  ]


}
