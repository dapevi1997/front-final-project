import { Component, OnInit, ViewChild } from '@angular/core';
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
import { Router } from '@angular/router';
import { ChartRadarComponent } from '../../chart/chart-radar/chart-radar.component';

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
  total!: number[];


  @ViewChild(ChartRadarComponent) chartRadarComponent!: ChartRadarComponent;

  constructor(
    private modalService: NgbModal,
    private messageService: MessageService,
    private ligaSvr : LigaService,
    private radarSvr : RadarService,

    ){}

  ngOnInit(): void {
    this.traerLiga();
    console.log("hola")

  }
  enviarNota(calif: number[],nombre:string):void {
    this.ligaSvr.notaEnviar(calif);
    this.ligaSvr.estudianteNombreEnviar(nombre);
    this.chartRadarComponent.ngOnChanges();
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
      setTimeout(() => {
        window.location.reload();
      });
    });
  }

  traerLiga(): void {
      this.id = this.ligaSvr.recibirLiga();
      this?.ligaSvr?.traerLiga(this.id)?.subscribe((data) => {
        this.liga= data;
        this.radarItems = data.radar;
        this.traerAprendices();
        this.promedioLiga();
        this.labelsRadar();
        this.NivelApropiacionRadar();
        this.chartRadarComponent.ngOnInit()
      })
  }

  promedioLiga(): void{
    let sumaAprendices = this.liga?.aprendices?.length || 0;
    console.log(sumaAprendices);
    let posiciones = this?.liga?.aprendices[0].calificaciones.length;
    let totalNota: number[] = new Array(posiciones).fill(0);
    console.log(posiciones);
    this?.liga?.aprendices.forEach(aprendiz => {
    aprendiz?.calificaciones?.forEach((nota, index) => {
      totalNota[index] += nota;
    });
    });
    totalNota.forEach((total, index) => {
      totalNota[index] = total/sumaAprendices;
    })
    console.log("este es el promedio notas "+ totalNota);
    this.total = totalNota;

    this.ligaSvr.promedioenviar( this.total);
    };

    labelsRadar(): void {

      let longitud = this.radarItems.areas.length
      let labels: string[] = new Array(longitud).fill("");
      this?.radarItems?.areas.forEach((nombre,index) =>{
        labels[index]=nombre.descriptor
        console .log(nombre.descriptor)
      })
      this.ligaSvr.labelsRadarEnviar(labels);
    }

    NivelApropiacionRadar(): void {

      let longitud = this.radarItems.areas.length
      let nivelApropiacion: number[] = new Array(longitud).fill(0);
      this?.radarItems?.areas.forEach((nota,index) =>{
        nivelApropiacion[index]=nota.nivel
        console .log(nota.nivel)
      })
      this.ligaSvr.nivelApropiacionEnviar(nivelApropiacion);
    }





  }
