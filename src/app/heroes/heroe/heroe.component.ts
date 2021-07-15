import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  title:string= 'Heroe';
  nombre:string='arturo';
  edad: number= 28;

  combinado(){
    return `${this.nombre}  ${this.edad}`
  }

  get capitalizado(){
    return this.nombre.toUpperCase()
  }

  cambiar(){
    this.nombre = 'carlos'
  }
}
