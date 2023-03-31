import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService
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

  eliminar = (nombre:string) =>{
    this.radarService.eliminarRadar(nombre).subscribe({
      next: data=>{
        this.toastr.success('Radar eliminado exitosamente!','Success');
        setTimeout(() => {
        window.location.reload();
      }, 1000); 
      }
    })
  }
}
