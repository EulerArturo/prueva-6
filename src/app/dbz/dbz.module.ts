import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesDbzComponent } from './animes-dbz/animes-dbz.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    AnimesDbzComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[AnimesDbzComponent],
})
export class DbzModule { }
