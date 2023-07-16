import { Component } from '@angular/core';
interface ELEMENTO {
    nombre: string,
    costo: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  elementos: ELEMENTO[] = [
    {
      nombre: 'anana',
      costo: '$500',
    },
    {
      nombre: 'banana',
      costo: '$600',
    },
    {
      nombre: 'manzana roja',
      costo: '$700',
    },
    {
      nombre: 'manzana verde',
      costo: '$800',
    },
    {
      nombre: 'limon',
      costo: '$900',
    }
  ];
  mostrarLista:boolean = true;
  
  noMostrarLista(): void{
    this.mostrarLista = !this.mostrarLista;
  }
}
