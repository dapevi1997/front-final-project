import { Component, Input } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RadarI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {
  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private radarService : RadarService
  ){}
   radarItems : RadarI ={
    nombre:"",
    areas:[ ]
  }

  crearRadar = () => {
    this.radarService.crearRadar(this.radarItems).subscribe({
      next: data => {
        this.modalService.dismissAll();
        this.toastr.success('Radar agregado exitosamente!','Success');  
         setTimeout(() => {
         window.location.reload();
       }, 1000);  
      },
      error: error =>{
        console.log(error);
        this.toastr.error("Algo salio mal","Error")
        
      }
    })
  }
}
