import { Component , Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AreaI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';

@Component({
  selector: 'app-editar-formulario-area',
  templateUrl: './editar-formulario-area.component.html',
  styleUrls: ['./editar-formulario-area.component.css']
})
export class EditarFormularioAreaComponent {
  form: FormGroup;
  @Input() nombre : string = '';
  @Input() index : number = 0; 
   @Input() areaIn !: AreaI ;
  constructor(
    private radarServicio : RadarService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ){
    this.form = new FormGroup({
      area: new FormControl(null, [Validators.required, Validators.pattern(/^([a-zA-Z0-9_-]){1,50}$/)]),
      descriptor: new FormControl(null, [Validators.required, Validators.pattern(/^([a-zA-Z0-9_-]){1,50}$/)]),
      factual:  new FormControl(null, [Validators.required,Validators.max(5), Validators.pattern(/^([0-5])/)]),
      conceptual:  new FormControl(null, [Validators.required,Validators.max(5), Validators.pattern(/^([0-5])/)]),
      procedimental:  new FormControl(null, [Validators.required,Validators.max(5), Validators.pattern(/^([0-5])/)]),
      metacognitivo:  new FormControl(null, [Validators.required,Validators.max(5), Validators.pattern(/^([0-5])/)]),
    });
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  cerrarModal = () => {
    this.modalService.dismissAll()
  }
  editar = () => {
     this.areaIn.radarNombre = this.nombre;
    this.areaIn = {
      ...this.areaIn,
      ...this.form.value
    }
    this.areaIn.nivel =(
      Number(this.areaIn.factual)+
      Number(this.areaIn.conceptual)+
      Number(this.areaIn.procedimental)+
      Number(this.areaIn.metacognitivo)
      )/4       
      
    this.radarServicio.actualizarArea(this.areaIn, this.index).subscribe({
      next: data =>{
        this.modalService.dismissAll();
        this.toastr.success('Area actualizada exitosamente!','Success');
         setTimeout(() => {
         window.location.reload();
       }, 1000);        
      },
      error: error =>{ 
        this.toastr.error("Algo salio mal","Error")
        console.log(error)      
      }
    })
  }
}
