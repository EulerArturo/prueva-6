import { Input } from '@angular/core';
import { Component} from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

@Input() personajes:personaje[]=[]
}
