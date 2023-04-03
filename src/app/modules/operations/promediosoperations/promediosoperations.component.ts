import { Component } from '@angular/core';
import { LigaI } from 'src/app/interfaces/liga.interface';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-promediosoperations',
  templateUrl: './promediosoperations.component.html',
  styleUrls: ['./promediosoperations.component.css']
})
export class PromediosoperationsComponent {

  ligas: LigaI[] | any;
  ligas2: LigaI[] | any;
  id!:string;

  constructor(
    private ligaSvr : LigaService
  ){}

  ngOnInit(): void {
    this.traerLigas();
  }

  traerLigas(): void {
    this.ligaSvr.traerTodo().subscribe((data) => {
      this.ligas = data;
      this.ligas2=data?.aprendices?.find(nombre => console.log(nombre)
      )
    });
  }

  enviarLiga(id: string): void{
    this.ligaSvr.enviarLiga(id)
  }

}
