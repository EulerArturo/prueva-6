import { Component } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-animes-dbz',
  templateUrl: './animes-dbz.component.html',
  styleUrls: ['./animes-dbz.component.css']
})
export class AnimesDbzComponent  {

  title:string= 'Personajes animados de DBZ'
  
  personajes:personaje[]=[
    {
      nombre:'goku',
      poder: 5000,
    },
    {
      nombre:'gohan',
      poder: 3000,
    }
  ]

  nuevo:personaje={
    nombre:'',
    poder: 0
  }

  personajeNuevo(argumento:personaje){
    this.personajes.push(argumento)
  }
}
