import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  
  @Input() nuevo:personaje={
    nombre:'',
    poder: 0
  }

  @Output() unNuevoPers: EventEmitter<personaje> = new EventEmitter();

  agregar(){
    if( this.nuevo.nombre.trim().length === 0){
      return;
    }

    this.unNuevoPers.emit(this.nuevo)
this.nuevo={
  nombre:'',
  poder:0,
}
  }
}
