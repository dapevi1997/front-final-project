import { Component, Input, OnInit } from '@angular/core';
import { AreaI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  @Input() index : number = 0;
  @Input() nombre : string = '';
   area : AreaI ={
    area:"david2",
    radarNombre:'',
    descriptor:"Ensayo de edicion nuevo",
    factual: 0,
    conceptual: 0,
    procedimental: 0,
    metacognitivo: 0,
    nivel: 0
  }
  constructor(
    private radarServicio : RadarService,
    private modalService: NgbModal,
  ){}
  ngOnInit(): void {   
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  editar = () => {
    this.area.radarNombre = this.nombre;
    this.radarServicio.actualizarArea(this.area, this.index).subscribe({
      next: data =>{
        alert('Exito')        
      },
      error: error => console.log(error)      
    })
  }
}
