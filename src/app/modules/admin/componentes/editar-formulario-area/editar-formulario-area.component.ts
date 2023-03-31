import { Component , Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
   areaIn : AreaI ={
    area:"",
    radarNombre:this.nombre,
    descriptor:"",
    factual: 0,
    conceptual: 0,
    procedimental: 0,
    metacognitivo: 0,
    nivel: 0
  }
  constructor(
    private radarServicio : RadarService,
    private modalService: NgbModal,
  ){
    this.form = new FormGroup({
      area: new FormControl(null, [Validators.required, Validators.pattern(/^([a-zA-Z0-9_-])/)]),
      descriptor: new FormControl(null, [Validators.required, Validators.pattern(/^([a-zA-Z0-9_-])/)]),
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
    this.areaIn.area = this.form.value.area;
    this.areaIn.descriptor = this.form.value.descriptor;
    this.areaIn.factual = this.form.value.factual;
    this.areaIn.conceptual = this.form.value.conceptual;
    this.areaIn.procedimental = this.form.value.procedimental;
    this.areaIn.metacognitivo = this.form.value.metacognitivo;
    this.areaIn.nivel =(
      Number(this.areaIn.factual)+
      Number(this.areaIn.conceptual)+
      Number(this.areaIn.procedimental)+
      Number(this.areaIn.metacognitivo)
      )/4   
    this.radarServicio.actualizarArea(this.areaIn, this.index).subscribe({
      next: data =>{
        alert('Exito') 
        console.log(data);               
      },
      error: error => console.log(error)      
    })
  }
}
