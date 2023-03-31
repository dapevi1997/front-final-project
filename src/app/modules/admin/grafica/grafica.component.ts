import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import {RolesService} from 'src/app/services/roles.service';
import { Aprendiz, LigaI } from 'src/app/interfaces/liga.interface';
import { LigaService } from 'src/app/services/liga.service';
import { RadarI } from 'src/app/interfaces/radar.interface';
import { RadarService } from 'src/app/services/radares.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css'],
  providers:[MessageService]
})
export class GraficaComponent implements OnInit{


  aprendices: Aprendiz[] | any;
  posicion:any[] = [];
  id!:string;
  liga!: LigaI;
  name!: string;
  radarItems!:RadarI

  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private ligaSvr : LigaService,
    private radarSvr : RadarService
    ){}

  ngOnInit(): void {
    this.traerAprendices();
    this.traerLiga();
    this.promedioLiga();
  }



  traerAprendices(): void {
    this?.ligaSvr?.traerAprendices()?.subscribe({
      next:data=>{
        data?.calificaciones?.forEach(element=> console.log("data element"+element))   
        console.log(this?.aprendices || []); 
        this.aprendices = data;
        console.log(this.aprendices);
      },
      error: error => console.log(error)      
      
    });

  }

  agregarAprendiz(): void {
    this.ligaSvr.añadirAprendiz(this.liga.nombre, this.aprendices[parseInt(this.posicion[0])]).subscribe((data) => {
      this.liga = data;

    
    });
  }

  traerLiga(): void {
      this.id = this.ligaSvr.recibirLiga();
      this?.ligaSvr?.traerLiga(this.id)?.subscribe((data) => {
        this.liga= data;
        this.radarItems = data.radar;
        
      })
  }

  promedioLiga(): void{
    let sumaAprendices = this.liga?.aprendices?.length || 0;
    
    let nota1 = 0;
    let totalNota1 = 0;
    let promedio = totalNota1 / sumaAprendices;

      setTimeout(() => {
        window.location.reload();
      }, 1000);

    });

  }
  }
}
