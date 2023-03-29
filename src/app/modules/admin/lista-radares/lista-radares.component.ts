import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-radares',
  templateUrl: './lista-radares.component.html',
  styleUrls: ['./lista-radares.component.css']
})
export class ListaRadaresComponent {
  radares:Array<string> =["radar1", "radar2","radar3"];
}
