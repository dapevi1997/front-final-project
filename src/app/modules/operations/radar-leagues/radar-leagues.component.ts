import { Component, OnInit } from '@angular/core';
import { LigaI } from 'src/app/interfaces/liga.interface';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-radar-leagues',
  templateUrl: './radar-leagues.component.html',
  styleUrls: ['./radar-leagues.component.css']
})
export class RadarLeaguesComponent implements OnInit {

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

}
