import { Component, Input } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RadarI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private radarService : RadarService
  ){
    this.form = new FormGroup({
    nombre: new FormControl(null, [Validators.required, Validators.pattern(/^([a-zA-Z0-9_-]){1,50}$/)]),
  });
}
   radarItems : RadarI ={
    nombre:'',
    areas:[ ]
  }
cerrarModal = () => {
  this.modalService.dismissAll();
}
  crearRadar = () => {
    this.radarItems.nombre = this.form.value.nombre;
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
