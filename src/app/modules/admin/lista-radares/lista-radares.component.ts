import { Component, OnInit } from '@angular/core';
import { RadarI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';

@Component({
  selector: 'app-lista-radares',
  templateUrl: './lista-radares.component.html',
  styleUrls: ['./lista-radares.component.css']
})
export class ListaRadaresComponent implements OnInit {

  constructor(
    private radarService : RadarService,
  ){}
  ngOnInit(): void {
    this.traerRadares();
  }
  radares!:RadarI[];
  
  traerRadares = () => {
    this.radarService.getRadares().subscribe(radares=>{
      this.radares = radares;
    })
  }
}
