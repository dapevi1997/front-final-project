import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { AreaI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';

@Component({
  selector: 'app-formulario-radar',
  templateUrl: './formulario-radar.component.html',
  styleUrls: ['./formulario-radar.component.css'],
  providers:[MessageService]
})
export class FormularioRadarComponent {
  valores = window.location.search;
  urlParams = new URLSearchParams(this.valores);
  name :any = this.urlParams.get('name');
  areaItem : AreaI ={
    area:"",
    radarNombre:this.name,
    descriptor:"",
    factual: 0,
    conceptual: 0,
    procedimental: 0,
    metacognitivo: 0,
    nivel: 0
  }
  constructor(
    private radarService : RadarService,
    private modalService: NgbModal,
    private messageService: MessageService,
    private toastr: ToastrService,
  
  ){}
  agregarArea = () =>{
    this.areaItem.nivel =(
      Number(this.areaItem.factual)+ 
      Number(this.areaItem.conceptual)+
      Number(this.areaItem.procedimental)+
      Number(this.areaItem.metacognitivo)
      )/4
    this.radarService.agregarArea(this.areaItem).subscribe({
      next: data=>{
        this.modalService.dismissAll();
        this.toastr.success('Area agregada exitosamente!','Success');  
         setTimeout(() => {
         window.location.reload();
       }, 1000);
      },
      error : error => {
        console.log(error);
        this.toastr.error('Algun error ocurrio!','Error')
        
      }
    })
  }
}
