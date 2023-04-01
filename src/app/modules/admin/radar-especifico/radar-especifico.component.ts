import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import {  AreaI, RadarI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';

@Component({
  selector: 'app-radar-especifico',
  templateUrl: './radar-especifico.component.html',
  styleUrls: ['./radar-especifico.component.css'],
})
export class RadarEspecificoComponent implements OnInit {
  valores = window.location.search;
  urlParams = new URLSearchParams(this.valores);
  name :any = this.urlParams.get('name');
  index: number =0;
  nombre : string =''
  areaIn !: AreaI;
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
    private modalService: NgbModal,
    private radarService : RadarService,  
  ){}
  ngOnInit(): void {  
   this.traerRadar()
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  traerRadar = () =>{
    this.radarService.getRadarEspecifico(this.name).subscribe({
      next: data => {        
        this.radarItems = data;
      }
    })
  }
severidadNota = (nota:number):string =>{
  let color='green';
  if(nota<=2.5){
    return color = 'red'
  }
  if(nota>2.5 && nota<=3){
    return color = '#f7806a'
  }
  if(nota>3.1 && nota<=3.5){
    return color = '#f7a56a'
  }
  if(nota>3.6 && nota<=4.2){
    return color='#f7c9a8'
  }
  return color;
}


}
