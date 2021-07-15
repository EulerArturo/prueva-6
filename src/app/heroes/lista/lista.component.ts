import { Component} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  {

  title:string= 'lista de heroes';
  heroeBorrado:string='';

  heroes:string[]=[
    'carlos', 'andres', 'javier', 'orlando'
  ]

  borrar(){
   this.heroeBorrado = this.heroes.shift() || '';
  }
}
