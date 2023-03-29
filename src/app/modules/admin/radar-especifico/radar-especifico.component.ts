import { Component, OnInit } from '@angular/core';
import { RadarI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';

@Component({
  selector: 'app-radar-especifico',
  templateUrl: './radar-especifico.component.html',
  styleUrls: ['./radar-especifico.component.css']
})
export class RadarEspecificoComponent implements OnInit {
  valores = window.location.search;
  urlParams = new URLSearchParams(this.valores);
  name :any = this.urlParams.get('name');
  radarItems : RadarI ={
    nombre:this.name,
    areas:[ {
      area:"",
      radarNombre:this.name,
      descriptor:"",
      factual: 0,
      conceptual: 0,
      procedimental: 0,
      metacognitivo: 0,
      nivel: 0
    }]
  }
  constructor(
    private radarService : RadarService
  ){}
  ngOnInit(): void {
   console.log("name: "+ this.name);   
   this.traerRadar()
  }
  traerRadar = () =>{
    this.radarService.getRadarEspecifico(this.name).subscribe({
      next: data => {
        console.log("data: "+ data);
        
        this.radarItems = data;
      }
    })
  }

}
