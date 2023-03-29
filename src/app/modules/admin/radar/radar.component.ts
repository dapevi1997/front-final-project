import { Component, Input } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RadarI } from 'src/app/interfaces/radar.interface';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {
  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService
  ){}
   radarItems : RadarI ={
    nombre:"",
    areas:[
      {
        area:"",
        radarNombre:"",
        descriptor:"",
        factual: 0,
        conceptual: 0,
        procedimental: 0,
        metacognitivo: 0,
        nivel: 0
      }
    ]
  }

  crearRadar = () => {
    this.modalService.dismissAll();
    this.toastr.success('Radar agregado exitosamente!','Success');  
     setTimeout(() => {
     window.location.reload();
   }, 1000);    
  }
}
